---
layout: post
title: Developer Spotlight&#58; Martin Jonasson
date: 2015-08-27 20:00:00.000000000 -08:00
---

_Today in the Developer Spotlight, we chat with Martin Jonasson, the creator of Rymdkapsel, a meditative real-time strategy space game._

![Developer Spotlight]({{ site.baseurl }}/images/spotlight/DeveloperSpotlight.png)

<span style="font-size: 120%">**Tell us a bit about yourself Martin. What is your background, what got you started in game development?**</span>

I got started with games when I was ten or so, making awful modifications to the sample projects supplied with the [Klik & Play](https://en.wikipedia.org/wiki/Klik) software I managed to scrounge up from somewhere. I didn't really know it at the time, but games became one of the pillars in my life, so when it became time to study something, picking games was a no brainer.

![Rymdkapsel]({{ site.baseurl }}/blog/assets/rymdkapsel-0.png)

<span style="font-size: 120%">**Where did you come up with the idea for _Rymdkapsel_?**</span>

The original idea was actually nothing like the final result. The only thing I had mind when I started was this little scenario: You have a space station with little people on, something makes the hull breach and you lose containment. This blows the little people out through the breach making them adorably float around in space.

![Rymdkapsel]({{ site.baseurl }}/blog/assets/rymdkapsel-1.png)

That was it. To try it out I needed a space station, so I got started on some code to make one, then the rest of the game grew from there. Design wise, some of it came very easily, other parts took weeks of messing around.

![Rymdkapsel]({{ site.baseurl }}/blog/assets/rymdkapsel-2.png)

<span style="font-size: 120%">**Are there any funny unintended moments that happened during the course of development?**</span>

In a way, the entire game is a happy accident. The space station thing was meant as a short diversion from another project, but ended up taking a year and a half from start to first launch. 
Porting to the Vita offered quite a few programming surprises, I took screenshots of my favorite ones.

![Rymdkapsel early screenshot from the PlayStation Vita port]({{ site.baseurl }}/blog/assets/rymdkapsel-8.png)

<span style="font-size: 120%">**You were the first one to successfully experiment with the Playstation Vita, how did it go?**</span>

The Vita is an interesting piece of hardware and when I did my port to it I was using the now defunct PlayStation Mobile platform, which meant coding in C#. Luckily for me the Haxe C# target was just mature enough that I could swing my own "port" of the subset of OpenFL features I needed in a fairly short time (a couple of months in parallel with working on the game).

![Rymdkapsel broken screenshot from the Vita port]({{ site.baseurl }}/blog/assets/rymdkapsel-3.jpg)

I'm very excited for the coming console support, it is clearly the next place to go for a framework as flexible as OpenFL. It also gives me great confidence in OpenFL going forward, knowing that I'll have the flexibility to launch on whatever platform fits me best.

<span style="font-size: 120%">**What was the best part of creating _Rymdkapsel_?**</span>

The reception, by far. It's gotten an honorable mention in the [Independent Games Festival](http://igf.com/2013/01/2013_independent_games_festiva_2.html), it's been reviewed in the [New York Times](http://www.nytimes.com/2013/06/05/arts/video-games/video-games-metro-rymdkapsel-quell-memento-and-tetris-blitz.html) and played by hundreds of thousands of people. It's rather unreal.

![Rymdkapsel at Sony's booth at E3 2014]({{ site.baseurl }}/blog/assets/rymdkapsel-4.jpg)

<span style="font-size: 120%">**What was your biggest challenge?**</span>

The PC port. It was something I decided to do on a little bit of a lark. A few months after the mobile versions had been released, it felt like a thing I might as well do. I ended up having some tech issues at the very last minute. Being a lone developer at times like that is a tall order. Preview builds had gone out to journalists, the launch date was only a couple of days away and the game would start to lag massively after running for an hour or two.
It took three days of non-stop debug work before I gave up and went for dinner with a few friends. When I came back from the dinner I figured it out.
As it turned out I had pulled in some brand new, rather untested code by mistake. This was leaking a tiny little bit of memory over time. I had been hunting a collection of red herrings for all that time, but once I found the bug it was fixed in seconds. 
All that was incredibly stressful, I was supposed to be doing press outreach and all manner of things not related to programming.

<span style="font-size: 120%">**What is your favorite part of the game?**</span>

Simply building a station. It's the mechanic it all started with, and as everyone can see, borrows generously from Tetris. It ended up working so very well I don't think I'll ever be able to top it. It's just fun building stuff, everything else is secondary to that experience.

![Rymdkapsel]({{ site.baseurl }}/blog/assets/rymdkapsel-5.png)

<span style="font-size: 120%">**What was your experience like with OpenFL?**</span>

OpenFL arrived at the perfect time for me. I was a die hard flash developer for a living for a whole bunch of years, but the platform started to stagnate and didn't really make for a great fit for mobile or even desktop stuff. As it so happened I could use my years of experience with Flash to hit the ground running with Haxe and as a bonus got the ability to target any platform worth caring about. It does have its flaws, as any toolkit does, but being completely open source it opens up the possibility for me to fix it myself. 
For me it hits that sweet spot between performance and flexibility I need as a single developer.

![Rymdkapsel]({{ site.baseurl }}/blog/assets/rymdkapsel-6.jpg)

<span style="font-size: 120%">**What advice would you give a new developer who wants to get started?**</span>

Just go. Don't care too much about what language you use, don't worry about engines, platforms or even what game you're making. Just make something. Ideally, pick something small you think you can finish in a month. I guarantee it'll take way, way longer than you thought. It always does. 
I don't really know how many games I've made before _Rymdkapsel_, but I'm pretty sure I made a good fifty or so games before that. Not all of them were good, not all were ever finished or even particularly good ideas, but I did make them and I did learn from them.

![Rymdkapsel!]({{ site.baseurl }}/blog/assets/rymdkapsel-7.png)

_[Rymdkapsel](http://www.http://rymdkapsel.com) is available on [Playstation Vita](https://www.playstation.com/en-us/games/rymdkapsel-psm/), [iOS](https://itunes.apple.com/us/app/rymdkapsel/id663547503?ls=1&mt=8), [Android](http://play.google.com/store/apps/details?id=com.grapefrukt.games.rymdkapsel1), [Steam](http://store.steampowered.com/app/253790), [Windows](https://www.humblebundle.com/store/p/rymdkapsel_storefront), [Mac OSX](https://www.humblebundle.com/store/p/rymdkapsel_storefront), [Linux](https://www.humblebundle.com/store/p/rymdkapsel_storefront). If you have any questions for Martin, feel free to contact him on Twitter at [@grapefrukt](https://twitter.com/grapefrukt). You can also stay up-to-date with Rymdkapsel by following [facebook.com/rymdkapsel](https://www.facebook.com/rymdkapsel), and Martin on [github.com/grapefrukt](https://github.com/grapefrukt)._
