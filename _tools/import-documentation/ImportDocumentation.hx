package;


import haxe.io.Path;
import lime.tools.helpers.PathHelper;
import sys.io.File;
import sys.FileSystem;


class ImportDocumentation {
	
	
	public static function main () {
		
		var args = Sys.args ();
		
		var source = args[0];
		var destination = args[1];
		
		var sourcePaths = PathHelper.readDirectory (source, [ ".git", "_book" ]);
		var targetPaths = [];
		var names = [];
		var titles = [];
		var summary = [];
		
		for (i in 0...sourcePaths.length) {
			
			sourcePaths[i] = sourcePaths[i].substr (source.length + 1);
			
		}
		
		try {
			
			var input = File.read (source + "/SUMMARY.md", false);
			
			//summary.push ("#### [Learn](/learn/)");
			
			while (true) {
				
				var line = input.readLine ();
				
				if (line != null && !StringTools.startsWith (line, "#") && StringTools.trim (line).length > 0) {
					
					summary.push (line);
					
				}
				
			}
			
		} catch (e:Dynamic) {}
		
		for (sourcePath in sourcePaths) {
			
			var components = sourcePath.split ("/");
			var targetPath = "";
			var name = "";
			var title = "";
			
			for (i in 0...components.length - 1) {
				
				var component = components[i];
				
				if (component != "") {
					
					component = StringTools.replace (component, "_", "-");
					targetPath += component + "/";
					
				}
				
			}
			
			var lastComponent = components[components.length - 1];
			
			if (Path.extension (lastComponent) == "md") {
				
				name = lastComponent.substr (0, lastComponent.length - 3);
				
				title = StringTools.replace (name, "_", " ");
				name = StringTools.replace (name, "_", "-");
				
				if (name.toLowerCase () == "readme") {
					
					targetPath += "index.md";
					
				} else {
					
					targetPath += PathHelper.combine (name, "index.md");
					
				}
				
				targetPaths.push (targetPath);
				names.push (name);
				titles.push (title);
				
			} else {
				
				targetPaths.push (null);
				names.push (null);
				titles.push (null);
				
			}
			
		}
		
		for (i in 0...summary.length) {
			
			summary[i] = replaceLinks (summary[i], sourcePaths, targetPaths);
			
		}
		
		for (i in 0...targetPaths.length) {
			
			if (targetPaths[i] == null) continue;
			if (targetPaths[i] == "index.md") continue;
			if (names[i] == "SUMMARY") continue;
			//if (names[i] == "_sidebar") continue;
			
			var sourcePath = sourcePaths[i];
			var targetPath = targetPaths[i];
			var outputPath = PathHelper.combine (destination, targetPath);
			var title = titles[i];
			
			Sys.println ("Copying \"" + outputPath + "\"");
			PathHelper.mkdir (Path.directory (outputPath));
			
			var content = File.getContent (PathHelper.combine (source, sourcePath));
			content = replaceLinks (content, sourcePaths, targetPaths);
			content = fixHighlighting (content);
			
			if (StringTools.startsWith (content, "# ")) {
				
				title = content.substring (2, content.indexOf ("\n"));
				
			}
			
			var output = File.write (outputPath, false);
			output.writeString ("---\n");
			output.writeString ("layout: documentation\n");
			output.writeString ("title: " + title + "\n");
			output.writeString ("---\n\n");
			//output.writeString ("# " + title);
			output.writeString (' <a href="https://github.com/openfl/learn-openfl/edit/master/${sourcePaths[i]}" class="btn btn-default pull-right" style="margin-top: 16px" role="button" target="_blank"><span class="glyphicon glyphicon-pencil"></span></a>');
			output.writeString ("\n\n");
			output.writeString (content);
			
			output.writeString ("\n\n{% sidebar %}");
			//output.writeString ("<br />\n\n");
			
			var pageComponents = targetPath.split ("/");
			pageComponents.pop ();
			
			var skip = false;
			
			for (link in summary) {
				
				if (link.indexOf ("<!--") > -1) continue;
				
				var index = link.indexOf ("](");
				
				if (index > -1) {
					
					if (link.indexOf ("://") > -1) {
						
						if (!skip || link.indexOf (" ") != 0) {
							
							output.writeString (link);
							output.writeString ("\n");
							
						}
						
					} else {
						
						var targetPath = link.substring (index + 3, link.lastIndexOf (")") - 1);
						var targetComponents = targetPath.split ("/");
						targetComponents.shift ();
						
						if (targetComponents.length <= 1 || pageComponents[0] == targetComponents[0]) {
							
							if (pageComponents.join ("/") == targetComponents.join ("/")) {
								
								var leftIndex = link.indexOf ("* [") + 3;
								var rightIndex = link.indexOf ("](");
								
								var link = link.substring (0, leftIndex) + "__" + link.substring (leftIndex, rightIndex) + "__" + link.substr (rightIndex);
								output.writeString (link);
								
							} else {
								
								output.writeString (link);
								
							}
							
							output.writeString ("\n");
							
						}
						
						skip = (pageComponents[0] != targetComponents[0]);
						
					}
					
				}
				
			}
			
			output.writeString ("{% endsidebar %}");
			output.close ();
			
		}
		
	}
	
	
	private static function fixHighlighting (content:String):String {
		
		// TODO: regex?
		
		//var regex = ~/```\n[\s\S]+?```/g
		 
		content = StringTools.replace (content, "\n```haxe\n", "\n{% highlight haxe %}\n");
		content = StringTools.replace (content, "\n```Haxe\n", "\n{% highlight haxe %}\n");
		content = StringTools.replace (content, "\n```bash\n", "\n{% highlight bash %}\n");
		content = StringTools.replace (content, "\n```xml\n", "\n{% highlight xml %}\n");
		content = StringTools.replace (content, "\n```as3\n", "\n{% highlight as3 %}\n");
		content = StringTools.replace (content, "\n```html\n", "\n{% highlight html %}\n");
		content = StringTools.replace (content, "\n```css\n", "\n{% highlight css %}\n");
		content = StringTools.replace (content, "\n```java\n", "\n{% highlight java %}\n");
		content = StringTools.replace (content, "\n```objc\n", "\n{% highlight objc %}\n");
		content = StringTools.replace (content, "\n```cpp\n", "\n{% highlight cpp %}\n");
		content = StringTools.replace (content, "\n```\n", "\n{% endhighlight %}\n");
		
		return content;
		
	}
	
	
	private static function replaceLinks (content:String, sourcePaths:Array<String>, targetPaths:Array<String>):String {
		
		for (i in 0...sourcePaths.length) {
			
			var sourcePath = sourcePaths[i];
			var targetPath = targetPaths[i];

			if (targetPath != null && targetPath.indexOf ("/") > -1) {
				
				if (StringTools.endsWith (targetPath, ".md")) {
					
					targetPath = targetPath.substring (0, targetPath.length - 3) + ".html";
					
				}
				
				targetPath = "/learn/" + targetPath;
				
				if (StringTools.endsWith (targetPath, "/index.html")) {
					
					targetPath = targetPath.substring (0, targetPath.length - 10);
					
				}
				
				content = StringTools.replace (content, sourcePath, targetPath);
					
			}
			
		}
		
		return content;
		
	}
	
	
}