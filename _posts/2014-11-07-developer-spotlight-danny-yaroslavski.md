---
layout: post
title: Developer Spotlight&#58; Danny Yaroslavski
date: 2014-11-07 20:01:15.000000000 -08:00
---

_Today in the Developer Spotlight, we chat with Danny Yaroslavski, the creator of Lightbot, an imaginative programming game for all ages._

![Developer Spotlight]({{ site.baseurl }}/images/spotlight/DeveloperSpotlight.png)

<span style="font-size: 120%">**Tell us a bit about yourself Danny. What is your background? What got your started in game development?**</span>

My name is Danny Yaroslavski, and I’m the founder of Lightbot Inc, a learn-to-code company that makes games to teach kids coding logic. I started making basic games and animations in Flash when I was 12, and as I went through high school, I’d continue to make Flash games and get a lot of great exposure on websites like ArmorGames, Kongregate and Newgrounds. That lead me to later work at games companies like ArmorGames and EA. Today, with a Bachelor of Computer Science in hand, _Lightbot_ is my full-time job.

![Lightbot]({{ site.baseurl }}/blog/assets/Lightbot-1.png)

<span style="font-size: 120%">**Where did you come up with the idea for the game?**</span>

One of the games that I created while in high school was a puzzle game called _light-bot_. I took inspiration from a [simpler game](http://www.newgrounds.com/portal/view/200730) where you could write codes to guide a robot to pick up computer chips, and imagined creating something that could be more accessible for kids to play with, with polished graphics and charming character design. That game really took off with programmers and non-programmers alike. Coming back to it in 2013, I recreated the game from the ground up to be education-friendly and cross-platform.

<span style="font-size: 120%">**Are there any funny unintended moments that happened during the course of development?**</span>

What’s really funny about _Lightbot_ is that it wasn’t initially intended to be an educational game at all. After it was released, it caught the attention of coding teachers, who then were using it as their go-to introductory tool for teaching. One of the most memorable emails I received was from a grade school teacher in Russia, with a photo attached of his whole classroom playing the Flash game with smiles on their faces. It was then that I knew _Lightbot_ was meant for something bigger than being simply a for-entertainment game.

![Lightbot]({{ site.baseurl }}/blog/assets/Lightbot-2.png)

<span style="font-size: 120%">**What was the best part of creating _Lightbot_?**</span>

It is always heartwarming to see teachers' and parents’ tweets of their students and kids playing _Lightbot_, all the while developing algorithmic thinking. It’s great knowing that I’m able to share my passion for coding with so many young minds.

<span style="font-size: 120%">**What was your experience like with OpenFL?**</span>

First off, OpenFL made it easy to transition from my experience making games in Flash and then transitioning to creating cross-platform apps. 

The best part about the OpenFL framework is being able to write in a single codebase, and yet deploy to every platform imaginable, simply by running a different command (ie. "test flash" becomes "test android" becomes "test html5"). The language you code in, Haxe, is extremely versatile, and allows for high-level object-oriented coding. Your Haxe code is then compiled to a native app for whichever platform you target.

OpenFL doesn’t force you to write code in any particular way, and is itself open-source, meaning that new features are always being added. If something doesn’t work as you’d like it to, you also have the freedom to jump into the OpenFL code itself and hack around to get it working your way. For those particular features that require different execution on different platforms, like say, touch events on mobile versus click events on computers, additional conditional compilations instructions can be embedded in the code directly (ie. "#if flash ... #elseif android ... #else ..."). 

There’s a whole team of dedicated coders who contribute to the OpenFL project regularly, as well as a community of Haxe developers ready to help newcomers on the OpenFL forums.

![Lightbot]({{ site.baseurl }}/blog/assets/Lightbot-3.png)

<span style="font-size: 120%">**What advice would you give a new developer who wants to get started?**</span>

Just jump in. Download Haxe and OpenFL, and try to run a project on your computer. Within ten minutes, you can have a running application on multiple platforms, using the same codebase. Learning the language, Haxe, is easy as well. It is very similar in syntax and structure to languages you’re likely familiar with, whether you come from an AS3, C++, Java or Javascript background. 

Why spend time developing for one platform in particular, and then rewrite code each time you want to target another platform? OpenFL gives you the opportunity to know that the code you write today, for the platform you’re targeting now, can be later reused on a multitude of other platforms in the future.

OpenFL is really the reason why _Lightbot_ is where it is today, and can be downloaded and played on Windows, Mac, iOS, Android, Flash and HTML5. In my opinion, OpenFL is your best bet for any developer planning on writing cross-platform applications, especially video games.

You can find out more about _Lightbot_ at [lightbot.com](http://www.lightbot.com).

