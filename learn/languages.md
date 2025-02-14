---
title: Supported Programming Languages
---

Thanks to the cross-platform nature of [OpenFL](/), developers can choose among multiple supported programming languages. OpenFL is a library ideal for game development, data visualization, and other forms of creative expression though programming. The compilation targets available with OpenFL range from desktop apps, mobile apps, to deploying on the web. 

### Haxe (All targets)

OpenFL is built using [Haxe](https://haxe.org/) — an open source, high-level, strictly-typed programming language with a fast optimizing compiler. For maximum reach to all supported compilation targets, developers can choose to build their OpenFL project with Haxe too.

With Haxe, OpenFL projects can be cross-compiled to the following targets:

- Native C++ desktop apps on Windows, macOS, and Linux
- Native C++ mobile apps on iOS and Android
- JavaScript for deploying to web browsers or [Electron](https://www.electronjs.org/) desktop apps
- [HashLink](https://hashlink.haxe.org/) desktop apps, using either JIT bytecode or compiled as native C
- SWF for the [Adobe AIR runtime by HARMAN](https://airsdk.harman.com/)

### JavaScript, TypeScript, and more (Web targets only)

Developers targeting the web only can install the [OpenFL npm package](https://npmjs.com/package/openfl), if they have [Node.js](https://nodejs.org/) installed. This package contains the OpenFL library pre-compiled from Haxe into JavaScript modules, and it includes type definitions (sometimes called externs) for various compile-to-JS languages, including [TypeScript](https://typescriptlang.org/), [ActionScript 3.0 with Apache Royale](https://royale.apache.org/), and [Haxe](https://haxe.org/). Supports bundlers like [Webpack](https://webpack.js.org/) and [Vite](https://vite.dev/).

With the OpenFL npm package, projects can be integrated anywhere that supports HTML and JavaScript:

- Web browsers
- [Electron](https://www.electronjs.org/) or [Tauri](https://tauri.app) desktop apps
- [Cordova](https://cordova.apache.org/) or [Capacitor](https://capacitorjs.com/) mobile apps

> ## Want to give OpenFL a try?
> 
> Get started by [downloading OpenFL](/download/), checking out the [list of features in OpenFL](/learn/features), or diving into the [OpenFL Developer's Guide](https://books.openfl.org/openfl-developers-guide/).
