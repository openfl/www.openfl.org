---
layout: post
title: OpenFL Hybrid Release
---

Spring has arrived, and new versions of Lime and OpenFL are up!

## OpenFL Hybrid

The biggest new feature is OpenFL "hybrid" mode. As you may already know, OpenFL 3 supports two different build modes, the default is a unified OpenFL, that is consistent across all target platforms, for Flash, for HTML5, for desktop, mobile or console native targets. The second build mode is called "legacy", which only works for native desktop or mobile. This is the older OpenFL renderer and platform backend, familiar to OpenFL 1 and OpenFL 2 behaviors.

Both approaches, either the default or legacy, have their own benefits. We built Lime 2 and the new OpenFL architecture for a reason, to be portable, to be easy to maintain, to maximize our code investment and open the door to new and exciting platforms, like the budding Wii U target. On the other hand, since we developed the older native architecture for so long, there is more maturity in areas of the code. "Hybrid" helps bridge the gap between them.

Instead of using the legacy Lime backend, hybrid uses Lime 2. On top of Lime, hybrid utilizes OpenFL legacy instead of the newer code. This approach opens up support for Lime 2 Gamepad, advanced text and low-level sound and networking with legacy OpenFL. This an in-between from Lime legacy to Lime 2, allowing us to continue to make Lime 2 strong, while not necessarily switching a project from the older OpenFL native renderer to the new code.

## How to Use Legacy or Hybrid Mode

Use `-Dlegacy` or `-Dv2` to use the OpenFL legacy (OpenFL 2) native behavior:

```bash
openfl test windows -Dlegacy
openfl test windows -Dv2
```

If you use a define, it enables fast-switching between different OpenFL build types.

For example, in FlashDevelop, the target drop-down box is actually editable. If you type "windows -Dlegacy" or "neko -Dlegacy" as an option, these will be available in addition to default Windows or Neko support, allowing either to be used.

If you must lock in legacy for a project, add the following before `<haxelib name="openfl" />` in the project XML:

```xml
<set name="openfl-legacy" />
```

Similarly, use the following to use OpenFL hybrid native behavior

```bash
openfl test windows -Dhybrid
```

If you must lock in hybrid for a project, add the following before `<haxelib name="openfl" />` in the project XML:

```xml
<set name="lime-hybrid" />
```

## New Releases

New versions of OpenFL and Lime are available. Some (newer) versions of haxelib install only "stable" versions of libraries. Unfortunately this means that Lime 2.3 was being installed with OpenFL 2.2, which are not compatible. As we continue to develop the newer OpenFL 3 APIs, we are changing the version number to a stable "3.0.0" in order to ensure that Lime 2.3 is installed along with OpenFL 3 and to avoid setup bugs.

Upgrade using the following command:

```bash
openfl upgrade
```

Install using the following commands:

```bash
haxelib install openfl
haxelib run openfl setup
```
