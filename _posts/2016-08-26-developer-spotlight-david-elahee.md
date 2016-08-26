---
layout: post
title: "Developer Spotlight: David Elahee"
date: 2016-08-26 10:00:00.000000000 -08:00
---

_Today in the Developer Spotlight, we chat with David Elahee, the creator of Double Kick Heroes, a rhythm metal shooter... with zombies... and Cadillacs._

![Developer Spotlight]({{ site.baseurl }}/images/spotlight/DeveloperSpotlight.png)

### Tell us a bit about yourself David. What is your background, what got you started in game development?

I made my first game in 2001 in University, it was a competitive procedural Pong game in [PltScheme](https://en.wikipedia.org/wiki/Racket_(programming_language)). Since then, every time I approached the so-called "serious" industries, I thought it was all about buzzwords and [junky] projects. So I committed myself to gamedev because it was so much more interesting; invigorating. It's dead simple, it makes me feel _alive_.

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-0.png)

### Where did you come up with the idea for _Double Kick Heroes_?

In December 2015, after a tiny bit of unemployment period, we participated in [Ludum Dare](http://ludumdare.com/compo/) 34. We had many game designs under the hood, so we told ourselves, "Let's make the game we want to make and that nobody will actually play. Who cares, it's Ludum Dare; no pressure," and we made it. A rhythm METAL shooter... with zombies... and Cadillac cars.

The problem is an awful lot of people actually played it and loved it. We were overwhelmed by enthusiasm, so we did not really have a choice. We had a METAL mission. We shelved all the other game designs and went the METAL way.

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-2.jpg)

### Are there any funny unintended moments that happened during the course of development?

Honestly, the whole dev was a long string of improvised fun and control freak phases. In the end let’s face it, the most unexpected and fun moment was just the genesis. Just imagine [Elmobo](https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Motte) (the composer) playing his muted 8-string guitar in the basement of FlyByNo and us three, creating a totally weird mix of games that really shouldn't go out well together in 3 days.

Other moments... having some well-known gaming stars playing the game and getting crushed by our dear "Hell Train" while a little 8-year-old girl is literally annihilating it... a [Stepmania](https://en.wikipedia.org/wiki/StepMania) Japanese champion playing perfectly and having that little itch and smiling when the boss comes in... and getting crushed obviously.

In the end, all those tiny moments of the player enjoying the game are so awesome.

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-3.png)

### What was the best part of creating _Double Kick Heroes_?

The game is not finished but my favorite part is really receiving the new songs from Elmobo and starting to improvise level design upon them. It takes a few days, but is very rewarding to try to extract his intentions&mdash;to craft tension&mdash;to create surprise, and there is this nice little feeling that I made my own arrangement that adds to his song.

Obviously, working with [Gyhyom](http://gyhyom.tumblr.com/)'s pixel art is a heap ton of pleasure. I am really a metal guy, and having the opportunity to make a game that appeals to my younger self is deeply satisfying.

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-1.png)

### What was your biggest challenge?

Sound and input sync is really an arduous problem, and especially for a Ludum Dare game. Mixing a rhythm game and a shooter was totally foolish, but hey, that's rock-and-roll. The engine I use was also not really made for low latency input, so I had to rewrite most parts of sound loading, input and loop nesting to go from 125ms (!!) latency to 0ms.

### What is your favorite part of the game?

Shooter, metal, hell armies, rhythm, drum, the road... one cannot really steal a part&mdash;it is a blend of the whole. 

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-5.gif)

### What was your experience like with OpenFL?

For this project so far, everything is going fine really (as opposed to two years of suffering on the previous one). The OpenFL team have done an insanely good work improving the quality of the API and the reliability.

I only had some tiny problems that were instantly fixed, I still have to make a full Windows build, and I kind of expect namespace conflicts, but it should be mostly okay. I kind of dread sound latency on native platforms, but I am confident I will find a quick solution. That is the beauty of open source.

If the tool has a problem, you can really sort out problems very quick without relying on anyone. Yes, learning the structure is tedious, but once you are done you can really improve for the greater good, and you don't have to chase support or wait for engine politics. You do it, fix it, and people get to choose if they like your solution after&mdash;in parallel&mdash;not before and blocking. I don't have management anymore, so I can really get to the point quick.

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-4.png)

### What advice would you give a new developer who wants to get started?

Focus on the game and not on the tech, or focus on the tech for a game, but you should really realize what you want and what's making you enjoy gamedev.

Make jams, avoid year-long projects at all costs. Think like an artist and choose if you need to earn a living from it very early. Easy to sum up... _know what you really want_.

![Double Kick Heroes]({{ site.baseurl }}/blog/assets/doublekickheroes-7.gif)

### What advice would you give a new developer who wants to get started?

Open-source, Flash and iteration speed.

Open-source is very important, especially in this age of engine uniformity. It means nobody holds your guts in his hand&mdash;benevolent or not.

Flash still has the most expressive, graphical creative API I ever used, and I used a lot of them. Of course, one should try many techs to know what is good and what's not and learn a number of tricks, but the Flash legacy has a great truth to deliver. It does not scale that well on hardware but there are important basics there. Our engine Heaps/H3d over OpenFL gets the best of all those worlds, so we are really blessed.

Iteration speed&mdash;nothing can beat the Flash runtime for development speed and comfort, it scales really well with OpenFL and the Haxe compiler and even if I use three different engines or techs, I still always go way faster prototyping in Haxe/OpenFL/Flash 2D or 3D... much faster than with a powerful editor with entities that requires a lot of setup, at least.

_[Double Kick Heroes](http://www.doublekickheroes.rocks) will soon be available on Steam (demo available [here](https://steamcommunity.com/sharedfiles/filedetails/?id=650407962)) for Windows, macOS and Linux. If you have any questions for David "BlackMagic", feel free to contact him on Twitter at [@blackmag_c](http://www.twitter.com/blackmag_c). You can also stay up-to-date with Double Kick Heroes by following the [Facebook page](https://www.facebook.com/double.kick.heroes/) and David on [Github](http://www.github.com/delahee)._
