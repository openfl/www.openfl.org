package;


import haxe.io.Path;
import helpers.PathHelper;
import sys.io.File;
import sys.FileSystem;



class ImportDocumentation {
	
	
	private static var wikiLinks:EReg = ~/\[\[(.+)\]\]/g;
	
	
	public static function main () {
		
		var args = Sys.args ();
		
		var source = args[0];
		var destination = args[1];
		
		var sourcePaths = PathHelper.readDirectory (source, [ ".git" ]);
		var targetPaths = [];
		var names = [];
		var titles = [];
		
		for (sourcePath in sourcePaths) {
			
			var path = sourcePath.substr (source.length);
			var components = path.split ("/");
			var targetPath = "";
			var name = "";
			var title = "";
			
			for (i in 0...components.length - 1) {
				
				var component = components[i];
				var index = component.lastIndexOf (".-");
				
				if (index > -1) {
					
					targetPath += component.substr (index + 2).toLowerCase () + "/";
					
				} else if (component != "") {
					
					targetPath += component + "/";
					
				}
				
			}
			
			var lastComponent = components[components.length - 1];
			var index = lastComponent.lastIndexOf (".-");
			name = lastComponent.substr (0, lastComponent.length - 3);
			
			if (index > -1) {
				
				var trim = name.substr (index + 2);
				title = StringTools.replace (trim, "-", " ");
				targetPath += trim.toLowerCase () + "/index.md";
				
			} else {
				
				title = StringTools.replace (lastComponent, "-", " ");
				targetPath += lastComponent;
				
			}
			
			targetPaths.push (targetPath);
			names.push (name);
			titles.push (title);
			
		}
		
		for (i in 0...targetPaths.length) {
			
			if (names[i] == "_sidebar") continue;
			
			var sourcePath = sourcePaths[i];
			var targetPath = targetPaths[i];
			var outputPath = PathHelper.combine (destination, targetPath);
			var title = titles[i];
			
			Sys.println (outputPath);
			PathHelper.mkdir (Path.directory (outputPath));
			
			var content = File.getContent (sourcePath);
			content = replaceWikiLinks (content, names, targetPaths);
			
			var output = File.write (outputPath, false);
			output.writeString ("---\n");
			output.writeString ("layout: documentation\n");
			output.writeString ("title: " + title + "\n");
			output.writeString ("---\n\n");
			output.writeString ("# " + title + "\n\n");
			output.writeString (content);
			
			var components = sourcePath.split ("/");
			var foundSidebar = false;
			
			while (!foundSidebar && components.length > 1) {
				
				components.pop ();
				var sidebarPath = components.copy ().join ("/") + "/_sidebar.md";
				
				if (FileSystem.exists (sidebarPath)) {
					
					foundSidebar = true;
					output.writeString ("\n\n{% sidebar %}");
					
					var sidebar = File.getContent (sidebarPath);
					sidebar = replaceWikiLinks (sidebar, names, targetPaths);
					
					output.writeString (sidebar);
					output.writeString ("{% endsidebar %}");
					
				}
				
			}
			
			output.close ();
			
		}
		
	}
	
	
	private static function replaceWikiLinks (content:String, names:Array<String>, targetPaths:Array<String>):String {
		
		while (wikiLinks.match (content)) {
			
			var link = wikiLinks.matched (0);
			link = link.substr (2, link.length - 4);
			var components = link.split ("|");
			
			var title = "";
			var target = "";
			
			if (components.length > 1) {
				
				title = components[0];
				target = components[1];
				
			} else {
				
				title = target = components[0];
				
			}
			
			if (StringTools.endsWith (target, ".md")) {
				
				target = target.substr (0, target.length - 3);
				
			}
			
			var replacement = "[" + title + "](/documentation/)";
			
			for (i in 0...names.length) {
				
				if (target == names[i]) {
					
					var path = targetPaths[i];
					path = path.substr (0, path.lastIndexOf ("/"));
					
					replacement = "[" + title + "](/documentation/" + path + ")";
					break;
					
				}
				
			}
			
			content = wikiLinks.matchedLeft () + replacement + wikiLinks.matchedRight ();
			
		}
		
		return content;
		
	}
	
	
}