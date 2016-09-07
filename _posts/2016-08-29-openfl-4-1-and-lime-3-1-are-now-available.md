---
title: OpenFL 4.1 and Lime 3.1 are Now Available
---

OpenFL 4.1 and Lime 3.1 have just been released!

You can read the full changelog [here](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md) and [here](https://github.com/openfl/lime/blob/develop/CHANGELOG.md), but these are some of the highlights:

## Updated Stage3D layer

As part of our commitment to improving Stage3D support, it was discovered that some of the underlying code for OpenFL's Stage3D support may have been GPL-licensed. This, for many companies, is a non-starter, so we needed to search for a new solution.

In 2013, Zynga announced PlayScript, a C#-based solution to help Stage3D-based titles run on iOS and Android. The project is no longer publicly hosted on Github, but the Stage3D bindings implemented for PlayScript were ported to Haxe, and contributed to OpenFL under our MIT license. In addition to bringing peace-of-mind in regards to licenses, this brings some noted improvements, such as support for AGAL bytecode translation to GLSL.

Step-by-step, the Stage3D support in OpenFL is becoming more accurate, and more powerful. We thank you for your continued feedback and contributions as this continues to grow. We are also continuing to invest in improvements to the OpenFL Starling port.

## Gradle support

The gracious [@player_03](https://github.com/player-03) has helped bring our Android support to the modern world -- Google has deprecated Apache Ant for Android builds, and migration to Gradle was a big, but ominous, task at hand.

Lime now has support for Android builds using Gradle, with a minimum of regressions in support for existing Android extensions.

## Updated website

You may have noticed that the OpenFL website has had a facelift. Although this is not directly tied to the OpenFL and Lime releases, we are happy to continue to improve the site, and make the resources here even easier to find.

Feedback is welcome.

Thanks everyone!