---
layout: post
title: NME 3.5.5, WebGL and More
date: 2013-02-01 22:54:54.000000000 -08:00
---
Today we are releasing NME 3.5.5, which is a maintenance release to continue to improve the solidity of our existing features, plus we have some new ones.
<ul>
	<li><a href="http://www.nme.io/download" target="_blank">Download</a></li>
</ul>
OpenGLView was introduced in NME 3.5, and now we add support for HTML5, using WebGL. You can check out the new "HerokuShaders" sample to a great cross-platform illustration of GLSL shaders at work. The sample will run on Windows, Mac, Linux, BlackBerry and HTML5, and will run on other mobile platforms when GLES2 support is official.<!--more--><a id="more-159"></a>

We have improved support for fullscreen, so you can more easily start your application fullscreen, toggle between windowed and fullscreen modes, have full hardware acceleration in either windowed or fullscreen mode and we now handle Alt + Enter and Alt + F4 on Windows and Linux, by default.

HTML5 has received improvements to z-ordering and TextField handling. We have added Event.ACTIVATE/DEACTIVATE and FocusEvent.FOCUS_IN/FOCUS_OUT events from the stage, to handle when users navigate away from your page or minimize and restore a web version of your application. We integrated WebWorks compatibility in the command-line tools, so you can also test web content as BlackBerry 10 application, making it easier to test HTML5 output for mobile.

We altered the keyCode values for A-Z, so that they return an uppercase character code value, instead of lowercase. This makes the behavior consistent between Flash, native and HTML5.

There have been a number of small improvements to make the command-line tools better, there are three new samples, ActuateExample, SimpleOpenGLView and HerokuShaders, and we have a FlashDevelop project template to projects created using "nme create project"

We are now working on NME 3.6. In the forums, please continue to provide feedback and testing as we make NME an even better framework. Thank you for all of your support, and please enjoy this new release.
