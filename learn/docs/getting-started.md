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

 * [Windows](http://haxe.org/website-content/downloads/3.2.1/downloads/haxe-3.2.1-win.exe)
 * [macOS](http://haxe.org/website-content/downloads/3.2.1/downloads/haxe-3.2.1-osx-installer.pkg)
 * [Linux](http://www.openfl.org/builds/haxe/haxe-3.2.1-linux-installer.tar.gz)

<div class="alert alert-warning">
<p><strong>macOS users:</strong> If you are running a current version of macOS, you will need to run the following commands to finish your install:</p>
<br/>
{% highlight bash %}
sudo haxelib setup /usr/local/lib/haxe/lib
sudo chmod 777 /usr/local/lib/haxe/lib
{% endhighlight %}
</div>

<div class="alert alert-info">
<p><strong>Linux users:</strong> If you are a Linux user, we recommend that you do use the above install script instead of your own package manager. The versions of Haxe and Neko distributed on Linux package repositories can be old, or experience other issues after the install.</p>
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

For example, here is how to build and run the "Pirate Pig" sample for HTML5:

{% highlight bash %}
openfl create PiratePig
cd PiratePig
openfl test html5
{% endhighlight %}


## Next Steps

Now that OpenFL is installed, you can [choose a code editor](/learn/docs/choosing-a-code-editor/) or start writing [your first project](/learn/tutorials/displaying-a-bitmap/)!
