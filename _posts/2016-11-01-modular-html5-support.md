---
title: Modular HTML5 Support
---

OpenFL 4.4 and Lime 3.4 have been released, introducing initial support for modular HTML5 builds.

On a single project, a `-final` build is ideal, because dead-code elimination and minification optimizations are run. In many cases, this output is smaller even than Flash Player builds (remember that most servers today have gzip compression enabled, so actual download sizes are comparable to zipping the final JS output)

In a large project, however, it can be ideal to share modular code between distinct OpenFL or Lime projects. These releases can output "lime.min.js" or "openfl.min.js" files, which are larger for a single project, but can reduce download times significantly where multiple projects are used on the same site.

This is an experimental feature, so we appreciate your help in testing it!

Other updates include better support for `context3D.setSamplerState`, improved support for video on HTML5, SDL 2.0.5 on native, improved Android immersive mode support, a smarter EventDispatcher and updates for macOS Sierra.

Run `openfl upgrade` to get the latest, and check out the full changelogs [here](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md) and [here](https://github.com/openfl/lime/blob/develop/CHANGELOG.md).