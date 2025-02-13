---
layout: default-header
title: Download OpenFL
redirect_from:
 - documentation/getting-started/installing-openfl/
 - documentation/setup/
 - documentation/setup/install-haxe/
 - documentation/setup/install-lime/
 - documentation/setup/install-openfl/
 - documentation/setup/platforms/
---

[OpenFL](/) is a cross-platform library that supports [multiple programming languages](/learn/languages). To access all compilation targets supported by OpenFL, including native C++, choose **Haxelib (Option 1)** below. For projects targeting the web browsers only, consider **npm (Option 2)** instead to be able to use additional languages — including JavaScript or TypeScript.

<div class="row">
	<div class="col-md-6 nopadding">
		<h2>Haxelib <small><i>(Option 1)</i></small></h2>
		<p>OpenFL is available to install <a href="https://lib.haxe.org/p/openfl">from Haxelib</a>. It supports HTML5, native desktop, native mobile, AIR and Flash development from a single toolset and the Haxe programming language.</p>
		<p>To get started, <a href="https://haxe.org/download/" target="_blank">install Haxe globally on your system</a>.</p>
		<p>With the latest versions of Haxe and Neko installed, open a command-prompt (Windows) or terminal (macOS/Linux) and run these commands:</p>
{% highlight bash %}
haxelib install openfl
haxelib run openfl setup
{% endhighlight %}
		<p>In order to check if OpenFL has been installed properly, try running the <code>openfl</code> command:</p>
{% highlight bash %}
openfl
{% endhighlight %}
		<h3>Run a Sample</h3>
		<p>You can use the "openfl create" command for a list of available samples.</p>
{% highlight bash %}
openfl create
{% endhighlight %}
		<p>For example, here is how to build and run the DisplayingABitmap sample on HTML5:</p>
{% highlight bash %}
openfl create DisplayingABitmap
cd DisplayingABitmap
openfl test html5
{% endhighlight %}
		<h3>Next Steps</h3>
		<p>Now that OpenFL is installed, you can <a href="/learn/docs/choosing-a-code-editor/">choose a code editor</a> or learn how to use OpenFL by creating <a href="/learn/tutorials/displaying-a-bitmap/">your first project</a>.</p>
	</div>
	<div class="col-md-6 nopadding">
		<h2>NPM <small><i>(Option 2)</i></small></h2>
		<p>If you would like to use OpenFL for a web-only project, OpenFL is also available <a href="https://www.npmjs.com/package/openfl">on npm</a>.</p>
		<p>Start by installing <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank">Node.js and npm</a> globally.</p>
		<p>Then, install Yeoman for generating a new OpenFL project:</p>
{% highlight bash %}
npm install -g yo generator-openfl
{% endhighlight %}
		<p>This workflow supports TypeScript, Haxe, ES6 JavaScript or ES5 JavaScript-based development, but it is not designed to cross-compile to native desktop or mobile targets.</p>
{% highlight bash %}
mkdir NewProject
cd NewProject
yo openfl
{% endhighlight %}
		<h3>Run a Sample</h3>
		<p>There are many OpenFL samples you can try, depending on the code environment you wish to use:</p>
		<ul>
			<li><a href="https://github.com/openfl/openfl-samples-ts" target="_blank">TypeScript</a></li>
			<li><a href="https://github.com/openfl/openfl-samples-haxe" target="_blank">Haxe</a></li>
			<li><a href="https://github.com/openfl/openfl-samples-es6" target="_blank">ES6 JavaScript</a></li>
			<li><a href="https://github.com/openfl/openfl-samples-es5" target="_blank">ES5 JavaScript</a></li>
			<li><a href="https://github.com/openfl/openfl-samples-as3" target="_blank">ActionScript</a></li>
		</ul>
		<p>Choose a sample, then <code>npm install</code> and <code>npm start</code> in the local directory to start a development server (with hot-reloading enabled):</p>
{% highlight bash %}
git clone https://github.com/openfl/openfl-samples-ts
cd openfl-samples-ts/features/display/DisplayingABitmap
npm install
npm start
{% endhighlight %}
		<h3>Next Steps</h3>
		<p>If you do not have a code editor already, <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> is a good choice for that integrates well with OpenFL and NPM.</p>
	</div>
</div>

## Problems?

If you have any questions or concerns when you are installing OpenFL, do not hesitate to visit our friendly [community forums](https://community.openfl.org/c/help) or [Discord server](https://discord.gg/tDgq8EE). Thank you for trying OpenFL, and please let us help if you have any problems at all.
