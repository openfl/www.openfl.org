---
title: Introducing the HXP Project
---

A long time ago, Haxe enabled support for targeting multiple target languages (such as JavaScript and C++) while a cross-platform framework enabled support for multiple target platforms (such as Windows and Linux).

The more that we could develop one project for multiple platforms, the more that we needed a tool to manage assets, template files, and all the unique scaffolding required to go cross-platform.

These tools grew over time and found their way into Lime. These are the backbone to many OpenFL and Lime projects, making it simple to deploy to web, desktop, mobile and other platforms from one codebase.

Our goal from the very beginning was to try and share our tools. Based on discussions from leading developers at Haxe Summit, we heard from many that there was a desire for many of the features including in the Lime tools, made available more broadly to other frameworks in the Haxe community. One feature specifically that piqued interest specifically was the "*.hxp" file format -- a file written in Haxe, executed on the fly for building Haxe based projects.

Today, we would like to share the initial release of a tool called HXP.

## What is HXP?

HXP is a library with Haxe 3 and Haxe 4 for turning Haxe source code into script files. You can use HXP as a replacement for Haxe HXML, or for complicated bash and batch file scripts.

We are releasing HXP first using an initial departure from the Lime tools, but hope to gather feedback and work toward a version 2.x API that may continue to build on the promise of the HXP project.

In addition to providing the ability to execute Haxe code on the fly, HXP includes a standard API for making files, creating directories, executing commands, parsing command-line arguments, log output and other features common to command-line scripting. We are also hoping to move as much of the platform-specific utilities (for Xcode, Gradle, Flash, AIR, etc) written in Lime tools and move them to HXP to make them widely available.

HXP is also compatible with being pre-compiled into Neko or other binaries as well, if runtime scripting is not desired.

## Basic Example

What does an HXP script look like? Here's a quick example:

```haxe
// script.hx
class Script {
	public function new () {
		trace ("HELLO FROM HXP");
	}
}
```

Pretty simple.

With `hxp` installed from haxelib, open a command-prompt or terminal, and change to the same directory as the script (or optionally, you can pass the directory or file path to the script as the second argument).

Just run `hxp`

```bash
hxp
HELLO FROM HXP
```

We can spice this up with more commands. For example, this script creates a new directory (if not present), compiles Haxe code, then runs a local web server for testing HTML5 content:

```haxe
class Script {

    public function new () {
    
        System.mkdir ("bin");
		
        var hxml = new HXML ({ cp: ["src"], main: "Main.hx", js: "bin/index.js" });
        hxml.build ();
		
        PlatformTools.startWebServer ("bin");
        
    }
    
}
```

For convenience, you can also execute scripts using the `-verbose` or `-v` flag, to get additional feedback on which directories are created, which commands are executed, and is especially for debugging or getting additional details.

Optionally, you can extend the `hxp.Script` class for automatic parsing of arguments. For example, consider this case:

```haxe
class Script extends hxp.Script {

    public function new () {
    
        super ();
        
        trace (command);
        trace (commandArgs);
        trace (flags.keys ());
        trace (defines.keys ());
        trace (options.keys ());
        
    }
    
}
```

When you extend `hxp.Script`, default argument parsing is included for you. Arguments which begin with a single dash (such as `-debug`) will be treated as a "flag", starting with `-D` is a "define", and starting with two dashes (such as `--out-dir`) is an "option". All other arguments will be considered a command (first), then command arguments.

For example:

```bash
hxp command arg1 arg2 -debug -Ddefine -Ddefine2=value --option=value
```

## How To Get HXP?

Simple!

Run the following commands:

```bash
haxelib install hxp
haxelib run hxp --install-hxp-alias
```

## Feedback

We hope that we can start the discussion on building better shared tools between Haxe projects, and that the initial release we've put out of HXP will help move things forward in that direction.