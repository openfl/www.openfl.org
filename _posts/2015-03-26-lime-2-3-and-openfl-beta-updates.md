---
layout: post
title: Lime 2.3 and OpenFL Beta Updates
---

After the release of OpenFL 3.0.0 beta, there has been a great deal of feedback and contributions as OpenFL and Lime continue to move forward.

Changes to HXCPP and Haxe 3.2 (as it nears a final release) spurred a number of needed changes, and numerous other continued improvements.

Lime now has added iOS support, including support for a proper "run" command (without opening Xcode). Issues that affected previous (legacy) version of Lime such as the initial window size resizing are resolved in the newer iOS implementation, and we are positioned to inherit further improvements from the SDL project.

Lime also has Mouse.lock, Mouse.warp and onMouseMoveRelative support, Timer and HTTP server improvements.

Use the following command to update to the latest version:

```bash
lime upgrade openfl
```

If you are testing Haxe 3.2, be sure you have the latest haxelib client in order to avoid possible install issues.

The [showcase](/showcase) has also been updated with over 30 new games. [Check it out](/showcase)!
