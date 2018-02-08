---
title: Starling Now Available on NPM
---

OpenFL 7.1 and Lime 6.1 are now available on Haxelib and NPM!

Among other minor features, OpenFL now properly supports Stage3D on NPM (where it was previously unavailable). We have also resolved showstopper issues when using GL framebuffers with the Xcode 11 SDK. This was the final blocker preventing us from releasing Starling 2 on Haxelib.

Starling is a GPU-accelerated framework that works on top of OpenFL and Flash. Part of the reason why Starling has been so popular for ActionScript developers is because Flash Player does not (ordinarily) support hardware accelerated rendering, but Starling has grown to support additional features and tools for game development.

OpenFL is GPU-accelerated by default, but there are still reasons why developers may choose to use Starling in addition or instead of the ordinary OpenFL features. In addition to bringing the newer Starling 2.x branch to Haxelib, we have invested in making Starling a first-class citizen in the NPM ecosystem, like OpenFL.

This brings TypeScript as well ES6 and ES5 JavaScript support to Starling, in addition the original ActionScript 3.0 and Haxe language support.

## Running the Starling Demo (Haxelib)

[Install Haxe](http://www.openfl.org/download), then install OpenFL, Lime and Starling using the following commands:

```bash
haxelib install openfl
haxelib run openfl setup
haxelib install starling
```

Create a copy of the Starling demo using this command:

```bash
openfl create starling:demo
```

You can then test the demo using one of OpenFL's supported platforms:

```bash
cd demo
openfl test flash
```

You can also use other supported platforms:

```bash
openfl test html5
openfl test windows
openfl test mac
openfl test linux
openfl test ios
openfl test android
openfl test air
```

## Running the Starling Demo (NPM)

To save on space, the Starling demo is not released on NPM, but you can [download a zip](https://github.com/openfl/starling/archive/master.zip) of the repository, or use GIT to clone it.

```bash
git clone https://github.com/openfl/starling
cd starling/samples/demo_npm/typescript
npm install
npm start -s
```

You can also try "es6", "es5" or "haxe" for different variations of the Starling demo, written in each language syntax.

## Creating an Empty Project (Haxelib)

You can create a new empty project using the following command:

```bash
openfl create starling:project MyNewProject
```

## Creating an Empty Project (NPM)

You can use the Yeoman generator we created for Starling to generate a new empty project for TypeScript, ES6, ES5 or Haxe:

```bash
npm install -g yo generator-starling-framework
mkdir MyNewProject
cd MyNewProject
yo starling-framework
```

This is similar to our generator for OpenFL:

```bash
npm install -g yo generator-openfl
mkdir OpenFLTest
cd OpenFLTest
yo openfl
```

## Next Steps

We have more work to do, but in the meantime, please visit our friendly forums for questions, concerns and feedback at: [http://community.openfl.org](http://community.openfl.org).

Thank you one more time to our awesome[Patreon](https://www.patreon.com/openfl) sponsors and contributors. We appreciate your help and support.

 > In the golden lightning 
Of the sunken sun, 
O'er which clouds are bright'ning, 
Thou dost float and run; 
Like an unbodied joy whose race is just begun. 
 
_["To a Skylark"](https://www.poetryfoundation.org/poems/45146/to-a-skylark)_