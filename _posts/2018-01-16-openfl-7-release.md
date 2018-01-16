---
title: OpenFL 7.0 Release
---

We have been hard at work preparing our seventh major release, but in addition to the ordinary improvements and refinements, this release opens up an entirely new way to use OpenFL.

## TypeScript, ES6 JavaScript and ES5 JavaScript

There is now support for using TypeScript and ES5/ES6 JavaScript with OpenFL!

### NPM-based Workflow

OpenFL 7 is the first release that is simultaneously available on NPM and Haxelib. NPM is a hugely popular ecosystem for web development, with over 550,000 packages available, and almost 800 new packages submitted every day. The majority of famous web development tools are all in NPM, from Grunt to UglifyJS to Webpack.

When OpenFL compiles for a native target, it does not go immediately to bytecode, but uses the Haxe compiler to write C++ source files, then relies a native compiler (Visual Studio, Xcode, Android NDK) to create an executable. In a similar fashion, we are compiling OpenFL to an intermediate JavaScript module format, then we can rely on industry-standard tools (such as Webpack) to emit our final application.

As of writing, we have over 15 samples and demos available in TypeScript, Haxe, ES6 JavaScript and ES5 JavaScript for the NPM workflow, in addition to our Haxelib samples. This provides an opportunity to choose new source languages for OpenFL when developing a web-based project, and integration with modern web development workflows.

Already, this workflow has enabled the ability to use hot-reloading, where code is recompiled automatically and browser pages are reloaded once compilation is complete. This and other resources in the ecosystem should be a huge boon to productivity.

### Yeoman Generator

There is a new Yeoman generator for OpenFL NPM projects that provides similar functionality to the `openfl create project <name>` command, populating a new project with template files for TypeScript, Haxe, ES6 JavaScript or ES5 JavaScript.

Assuming NPM is already installed, you can install the generator using the following command:

```
npm install -g yo generator-openfl
```

Then you can create a new project like this:

```bash
mkdir NewOpenFLProject
cd NewOpenFLProject
yo openfl
```

### SWF Support

In addition to all of our runtime features in OpenFL, we have also made compile-time SWF processing available for Webpack.

Webpack uses a series of libraries called "loaders" to process different kinds of assets, and in addition to OpenFL and the Yeoman generator, we also created a SWF loader to convert SWF assets into asset library bundles for OpenFL. Both the "NyanCat" and "UsingSWFAssets" samples illustrate how this works, and SWF loading is even compatible with hot-reloading, so when changes are made to a SWF file (such as from Adobe Animate) the SWF will be re-processed and the development page will reload automatically.

### Minor Additions

There are a number of small improvements that have occurred while making OpenFL available for NPM.

 * Added `new Stage()` support for NPM releases, to simplify initialization
 * Added `openfl.net.navigateToURL` and other top-level functions (available under `openfl.Lib` on Haxe)
 * Added `openfl.utils.AssetManifest` with initial methods to simplify runtime asset manifest creation
 * Added support for DOM rendering without requiring a `-Ddom` compile-time flag

## Recent Features

Since OpenFL 6.0 was released in August of last year, there are other recent features that are worth mentioning.

### Adobe AIR Target

In addition to all of our other targets in the Haxelib version of OpenFL, we added official support for Adobe AIR. That means that in addition to C++ native builds for mobile and desktop, we have made it simpler to compile for Adobe AIR. All Adobe AIR APIs should be supported, and our tooling should help make `openfl test air` as simple as every other platform.

### Beta Support for UWP

We have added beta Universal Windows Platform (UWP) support, using the HTML5 target. For anyone interested in publishing to the Windows Store, this should help make the process easier, or at least a bit more automatic. We appreciate any developers interested in contributing to help make this more mature.

### Initial -watch Support

We have also added initial `-watch` support for Haxelib builds, which re-runs the specifed command when any of the \*.hx files in the source path changes:

```
openfl test windows -watch
```

The above command will build and run an OpenFL as a native Windows application, and will watch all of the \*.hx files located in the project and haxelib sources used. Then if one of those files are changed, the running application is terminated, and the project is built and run again.

### Packed Asset Library Support

Updates to Lime also include initial packed asset library support, which provides the ability to generate single \*.pak files externally as a globbed or compressed file.

This feature has been long-requested on the desktop, where distribution makes asset files more visible to users. Used packed asset libraries enables the use of a single "level1.pak" or "assets.pak" file that makes resources less conspicuous, and can also save space if compression is enabled. 

### Variable Substitution in Template Filenames

The Lime command-line tools now have the ability to process template values not only in the contents of files, but also in their names, using `{{variable}}` syntax. There are sometimes template files you may want or need which vary in name, such as due to the name of the project. This feature makes it possible to define a single `{{app.name}}-Info.plist` file, or other resource, and have it copied accordingly.

### OpenAL Effects Extension Support

On OpenAL-Soft platforms (Windows, Linux, Android) we have support for OpenAL Effects in Lime. This will make it easier for sound engineers to create more complex and advanced sound for these projects.

### On-going Stability, Performance and Consistency

There are many other fixes we have made to improve performance, keep OpenFL stable and to overall improve the consistency of how the OpenFL API supports Flash APIs.

We have made endianness improvements for sockets and `ByteArray`, and added missing `openfl.Vector` properties. Initial support for compressed texture formats in Stage3D has landed, and improved support for complex text layouts and Unicode in our native font rendering. Capture phase support was added for all display objects, and improved support for multiple input `TextField` objects. OpenGL masking now uses a stencil buffer, for complex masking, and improved how we handle web fonts.

## Download and Install

The latest OpenFL release is available on Haxelib or NPM. To install on Haxelib, after installing Haxe, run the following commands:

```
haxelib install openfl
haxelib run openfl setup
```

Then you can confirm that everything is working by running the `openfl` command:

```
openfl
```

For NPM, try one of our samples for [TypeScript](https://github.com/openfl/openfl-samples-ts), [Haxe](https://github.com/openfl/openfl-samples), [ES5](https://github.com/openfl/openfl-samples-es6) or [ES6](https://github.com/openfl/openfl-samples-es5), like this:

```
git clone (repository path)
cd (path)/features/display/DisplayingABitmap
```

Then install and start the demo or sample:

```
npm install
npm start -s
```

## Thanks

Over 130 contributors have helped us make nearly 240 OpenFL and Lime releases combined. Our [Patreon](https://www.patreon.com/openfl) sponsors have contributed monthly to make OpenFL successful, and OpenFL continues to grow as a valuable library for cross-platform and single-platform development.

Thank you everyone! We are looking forward to a bright 2018, and hope to see you all at [Haxe Summit](https://summit.haxe.org/us/2018/) this May in Seattle.