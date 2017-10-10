---
title: Getting Started
redirect_from:
 - documentation/getting-started/installing-openfl/
 - documentation/setup/
 - documentation/setup/install-haxe/
 - documentation/setup/install-lime/
 - documentation/setup/install-openfl/
 - documentation/setup/platforms/
 - download/
---

## Install Haxe

First, you will need to install Haxe and Neko. OpenFL uses Haxe to power the build process, and Neko to run the command-line tools. Both are included in the following installers, one for each platform:

<div class="row">
	<div class="col-md-4 text-center">
		<a class="btn" href="https://github.com/HaxeFoundation/haxe/releases/download/3.4.4/haxe-3.4.4-win64.exe">
			<h3><span class="icon-windows">&nbsp;Windows</h3>
		</a>
	</div>
	<div class="col-md-4 text-center">
		<a class="btn" href="https://github.com/HaxeFoundation/haxe/releases/download/3.4.4/haxe-3.4.4-osx-installer.pkg">
			<h3><span class="icon-apple"></span>&nbsp;macOS</h3>
		</a>
	</div>
	<div class="col-md-4 text-center">
		<a class="btn" href="https://haxe.org/download/linux/" target="_blank">
			<h3><span class="icon-linux"></span>&nbsp;Linux</h3>
		</a>
	</div>
</div>

<br />

<div class="alert alert-warning">
<p><strong>macOS users:</strong> You need to run the following command to finish your install:</p>
<br/>
{% highlight bash %}
sudo haxelib setup ~/haxelib
{% endhighlight %}
</div>

## Install OpenFL

With the latest versions of Haxe and Neko installed, open a command-prompt (Windows) or terminal (macOS/Linux) and run these commands:

{% highlight bash %}
haxelib install openfl
haxelib run openfl setup
{% endhighlight %}

To confirm that OpenFL is installed and working properly, try running the "openfl" command:

{% highlight bash %}
openfl
{% endhighlight %}

If you are upgrading, you can find more information about changes <a href="https://github.com/openfl/lime/blob/master/CHANGELOG.md" target="_blank">here</a> and <a href="https://github.com/openfl/openfl/blob/master/CHANGELOG.md" target="_blank">here</a>.

## Run a Sample

OpenFL includes a set of sample projects, from simple tutorials to more complex demos. This is a good way to confirm that OpenFL is installed properly.

You can use the "openfl create" command for a list of available samples.

{% highlight bash %}
openfl create
{% endhighlight %}

For example, here is how to build and run the DisplayingABitmap sample on HTML5:

{% highlight bash %}
openfl create DisplayingABitmap
cd DisplayingABitmap
openfl test html5
{% endhighlight %}



## Next Steps

Now that OpenFL is installed, you can [choose a code editor](/learn/docs/choosing-a-code-editor/) or learn how to use OpenFL by creating [your first project](/learn/tutorials/displaying-a-bitmap/).
