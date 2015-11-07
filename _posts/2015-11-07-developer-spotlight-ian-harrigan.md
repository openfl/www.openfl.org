---
layout: post
title: Developer Spotlight&#58; Ian Harrigan
date: 2015-11-07 20:00:00.000000000 -08:00
published: false
---

_Today in the Developer Spotlight, we chat with Ian Harrigan, the creator of HaxeUI, a cross-platform user interface toolkit._

![Developer Spotlight]({{ site.baseurl }}/images/spotlight/DeveloperSpotlight.png)

<span style="font-size: 120%">**Tell us a bit about yourself Ian. What is your background, what got you started in development?**</span>

I suppose it all started way back when I was living in Bahrain, there wasn’t a huge amount to do and when we got our first computer the world of programmable logic opened up to me. I’d been building electronic circuits - logic gates and transistor experiments - for a while, and also used to program scientific calculators to draw all types of things – but with programming on a desktop things got a lot easier (for starters I didn’t need a soldering iron or spend 2 hours typing “code” into a calculator on a tiny keyboard!). 

[BASIC](https://en.wikipedia.org/wiki/BASIC) was my starting point, and I quickly fell out of love with it, though changing screen modes and drawing pixels still holds a nostalgic place in my heart! 

Fast forward a bit and C++ came onto my radar. The concept of classes instantly appealed to me and was something I felt all other languages (including C) always lacked (though I know a lot of people disagree with me on that one!). And that was that, now a days I mainly develop in C++, Java, and of course Haxe.

<span style="font-size: 120%">**Where did you come up with the idea for _HaxeUI_?**</span>

I stumbled across Haxe a few years ago whilst looking for a way to compile code from a single code base into multiple native targets, ie, without a virtual machine on the target system. This came about after working on a medical mobile application and having to potentially maintain multiple builds, with either different code bases or by using a framework like PhoneGap, which at the time was not a good solution – it felt and responded like a slow webpage and really didn’t inspire confidence in the users. 

Haxe seemed to tick the first box, of being able to maintain a single codebase as well as transpile, and ultimately compile, to fully native targets on a wide range of systems. This was a turning point to me, and to this day I’m not sure how it took me so long time find Haxe.

The second box to tick was to be able to build a visually consistent rich user interface using Haxe, and this is where OpenFL came onto my radar as a way to display content on screen in a pretty consistent manner across platforms. I did find multiple UI libs for Haxe and/or OpenFL but none seemed to match my criteria, were simply incomplete or seemed to focus more on game type UIs rather than rich business applications. 

That’s when HaxeUI was born! I don’t have much experience with the Flash API but its pretty straight forward and having the ability to run the same code natively on pretty much all desktops and devices meant that my proof of concept test app quickly grew into a general UI framework.

![HaxeUI]({{ site.baseurl }}/blog/assets/haxeui-0.jpg)

<span style="font-size: 120%">**Are there any funny unintended moments that happened during the course of development?**</span>

Certainly, quite a lot. I have of course, built user interfaces before, but previously by extending other toolkits, and normally for a single platform type, for example, only desktop, or only mobile – never both at the same time.

![HaxeUI]({{ site.baseurl }}/blog/assets/haxeui-1.png)

Because of that it was quite challenging to get the UI feeling correct on both mobile and desktop platforms, scrollbars for example are more useful on a desktop app with increment, decrement and thumb buttons, but on mobile platforms they should not pollute the interface by showing and hiding automatically and are generally really only there for feedback rather than functionality (when was the last time you actually clicked – or even saw a “full” scroll bar on a mobile/tablet?).  This lead to some custom css rules and complicated controls (“showButtons”, “autoHide”).

ScrollViews were equally complex for much the same reasons, on a mobile device you normally interact with a ScrollView by actually “moving” the content rather than using a scrollbar, so this had to be incorporated. One interesting side effect of this was that the same method on a desktop is actually pretty nice, and as a result I constantly find myself trying to scroll dropdown boxes and pages on my (non-HaxeUI) desktop apps by dragging the content! 

There was also a comical moment when the it became apparent the original name “YAHUI” (Yet Another Haxe UI) meant something quite specific in Russian – but we wont get into that! 

![HaxeUI]({{ site.baseurl }}/blog/assets/haxeui-2.jpg)

<span style="font-size: 120%">**What was the best part of creating _HaxeUI_?**</span>

I think it was probably simply realising that it was possible and viable. Even having a button or a list that does something working on every device and platform I can think of still impresses me (to a degree!).

Second to that it was probably the reaction and reception. From its inception HaxeUI was really just personal project that was really just created for me streamline my application building. So its great to know that other people use it. I think it’s the main reason I actually decided to make a big push and upgrade the whole thing to the next shiny “version 2”. 

![HaxeUI]({{ site.baseurl }}/blog/assets/haxeui-5.jpg)

<span style="font-size: 120%">**What was your biggest challenge?**</span>

Trying to please all the people all the time - a user interface is quite a personal thing, and everyone has their own opinion of just how it should work, look and feel. Trying to incorporate all of these different viewpoints was something I wanted achieve with HaxeUI by making is as customizable as possible, whilst still maintaining a relatively simple experience for the developer when using it. Essentially it should get out of the way and allow a developer to concentrate on application logic rather than application user interface, but at the same time allow total customization of that user interface (if required).

![HaxeUI]({{ site.baseurl }}/blog/assets/haxeui-3.jpg)

I know from personal frustration from using other toolkits that an entire application can become “ugly” (visually) if you cant just change that last little bit of a components visual style. With that in mind, I tried to implement a framework based on the idea that whatever visual styles I came up with others (and I include myself in that) would dislike / want to change entirely.

I think the use of a css type language to apply visual styles has gone a long way to achieve this; it means pretty much anyone with a basic understanding of css can manage to drastically alter pretty much everything that appears onscreen. 

![HaxeUI]({{ site.baseurl }}/blog/assets/haxeui-4.jpg)

<span style="font-size: 120%">**What is your favorite part of the _HaxeUI_?**</span>

The speed it allows you to build things, you can get a decent and functional user interface up and running in minutes, it really does allow you quickly add a user interface to an application with very little boiler plate code, and this is something that has been drastically improved in HaxeUI Version 2. 

Add to that using macro driven build helpers to automatically populate model and view classes with typed member variables of named components and you can rapidly build a fairly compelling application across pretty much any platform that is supported. 

Even to this day, I do occasionally catch myself when building a new test project with HaxeUI thinking “oh right, yeah, that’s it. Add a button, setup an event listener”.

Another feature I like about HaxeUI is the ability to keep entire “applications” in human readable xml files, including application logic via scripting. Not only does this really help with playing with app logic and styles, it also means entire applications, or application modules can be sent “down the wire”. A good example of this in action would be the calculator example (https://github.com/ianharrigan/haxeui-builder/blob/master/assets/data/calc.xml) and it loaded remotely and run inside the haxeui-builder (http://haxeui.org/try.jsp?layoutId=Ra76bjj). 

<span style="font-size: 120%">**What was your experience like with OpenFL?**</span>

Very positive. It allowed me to hit the ground running and, even though I had little flash experience it was easy to get things working across platforms. There were, of course, gotchas here and there, and fairly large issues with textfields on native platforms but this is something I have seen massive improvements on in subsequent releases. In fact OpenFL Next seems to have resolved almost all of my previous issues!

<span style="font-size: 120%">**What advice would you give a new developer who wants to get started?**</span>

Have fun! Development is intrinsically complicated and requires, at times, lots of late nights, debug sessions and headaches. But it is also a fundamentally creative and expressive pursuit and its important to not lose sight of that. Whether you are building a game or a stock marker ticker its important to have fun and enjoy what you are doing.

Oh, and sleep, sleep is important (apparently).

_[HaxeUI](http://www.haxeui.org) is available to use on Linux, Mac or Windows at [http://www.haxeui.org](http://www.haxeui.org) or on [Haxelib](http://lib.haxe.org/p/haxeui/). If you have any questions for Ian, feel free to contact him on Twitter at [@IanHarrigan1982](https://twitter.com/ianharrigan1982). You can also stay up-to-date with HaxeUI by following [facebook.com/haxeui](https://www.facebook.com/haxeui), or on Twitter [@haxeui](https://twitter.com/haxeui), and with Ian on [github.com/ianharrigan](https://github.com/ianharrigan)._