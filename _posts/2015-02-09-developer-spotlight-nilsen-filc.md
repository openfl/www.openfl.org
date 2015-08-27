---
layout: post
title: Developer Spotlight&#58; Nilsen Filc
date: 2015-02-10 10:00:00.000000000 -08:00
---

_Today in the Developer Spotlight, we chat with Nilsen Filc, the creator of Yummy Circus, a colorful massively cross-platform puzzle game._

![Developer Spotlight]({{ site.baseurl }}/images/spotlight/DeveloperSpotlight.png)

<span style="font-size: 120%">**Tell us a bit about yourself Nilsen. What is your background, what got you started in game development?**</span>

My father offered me a _Game & Watch_ device when I was just a kid. I really liked it and it engaged my passion for video games. I was lucky enough to start programming in Basic at school on [Thomson MO5](http://en.wikipedia.org/wiki/Thomson_MO5) machines: it was 1985, and only a few schools would provide access to those machines and teach us kids how to drive them.

Later on, my parents wanted me to get a PC to work, but I chose to get an [Amiga 500](http://en.wikipedia.org/wiki/Amiga_500) to create and play instead: my own first computer with Deluxe Paint and AmigaBASIC, and this time, I had the complete programming manual! I started tinkering. I was that one guy providing my friends with games on floppies, and later on with games for their calculators. I thought it was way better to code a Star Wars Death Star trench animation using 3D equations on a [HP48GX](http://en.wikipedia.org/wiki/HP-48_series) calculator than to listen to the math teacher (I still think so).

I did my first foray in the corporate sector at Cap Gemini for quite a while, coding a lot of things, from secured applications for government agencies, to intranets and content management systems and mapping programs for the television or sailing. I learned a lot. I released my first online multiplayer framework aimed at Flash in 2004 called [2iceMP](http://www.gotoandplay.it/spotLight/2iceMP/), and my first "big" game around that time. It had such success online that I managed to sell the engine, something I couldn't even dream about (thanks, Ugur!).

This got me to quit the serious corporate sector and to leap in full-time game development. It led me to San Francisco at [IGF](http://www.igf.com) in 2007, finalist in the now defunct category "Best Web Game", and to the Paris Flash Festival the same year, where I met Nicolas Cannasse (Haxe creator!), competing for the "Best Game" finals. Of course, he won! I don't regret joining the game development sector a second.

I co-founded [Puzzl](http://www.puzzl.com) in 2009 and here we are today nearing launch phase for _[Yummy Circus](http://www.yummycircus.com)_!

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-1.jpg)

<span style="font-size: 120%">**Where did you come up with the idea for _Yummy Circus_?**</span>

My first successful online game was an action-puzzle game, but it was solo player. Players around the world really liked this game and played a lot to be featured in the highscores table! They played a silent competition, pumping so much bandwidth on my humble servers (23GB of data out per day in 2004) that I always wondered what would it cost me if I turned it into a multiplayer game and allowed players to play together and have their fun multiplied. Would that work? I settled to make it. _Yummy Circus_ is the realization of that process, a very fast, fun and engaging online arcade action-puzzle multiplayer game, playable with up to 8 players in teams at the same time, on pretty much any platform out there.

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-2.jpg)

<span style="font-size: 120%">**Are there any funny unintended moments that happened during the course of development?**</span>

Yes. I remember that during the development, I took the liberty of bringing a beta of _Yummy Circus_ and 4 joypads to friendly gatherings. That funny unintended moment was my friend Marga yelling at everyone while we played a local multiplayer game session for the first time. She started saying funny words very loud, totally engaged in her game battle. We could not stop her. That was something :-). It gave me confidence that _Yummy Circus_ provided much fun.

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-3.jpg)

<span style="font-size: 120%">**What was the best part of creating _Yummy Circus_?**</span>

The best part? Haxe, NME and OpenFL!

The possibilities are endless: unleashing native power client-wise after years stranded in a VM opened my eyes. _Yummy Circus_ jumped from its 640 x 480 resolution in Flash form to a full HD 1920 x 1080 resolution locked in at 60 fps, running natively. How cool is that? And that, while being able to leverage my years of coding Flash. It's like a level-up, a super invincible star-mushroom.

Cross-platform is the way to go. Haxe provides us with that magic, and OpenFL wraps that nicely. The beauty is that it happens not only on the client side, but on the server part as well. People struggling with different separated teams server and client wise should know better.

It's a unicorn. And it is real.

Having today _Yummy Circus_ running on 10 different platforms with one source code, with any type of joypads hooked up and even mixed, playing together in couch-gaming or over the internet is incredibly rewarding. No more boundaries.

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-4.jpg)

<span style="font-size: 120%">**What was your biggest challenge?**</span>

My biggest challenge was taking the leap of faith to switch from a functional Flash demo to a Haxe/NME system. I had just shy of 14,000 lines of AS3 to convert. That, and to convince Anne-Sophie (Yummy's graphic designer) to rework all the graphics to match the full HD native resolution. Fortunately, it worked out pretty well.

Then it was getting multiple joypads working on micro-consoles.

Joshua and the community helped me a lot. When we showcased _Yummy Circus_ at GDC in March 2013 running on an Ouya with pink PS3 joypads, some other game companies and journalists came to our booth asking us how we managed to do that on the micro-console. It was thanks to Haxe and the community!

I'd like to grab the opportunity, if I may, to officially announce that _Yummy Circus_ is in the Nintendo product pipeline for a release this year on the Wii U. We are indeed working with Lars Doucet, Lucas Pope and Joshua to enable OpenFL reach mainstream video game consoles. That is today's challenge and we are getting there!

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-5.jpg)

<span style="font-size: 120%">**What is your favorite part of the game?**</span>

There are several. The cross-platform multiplayer part of course, the sheer diversity of modes, the AI playing at a dazzling speed, and the content and accessibility of the game.

Having friends on Windows, Mac OS X, Linux, Nvidia Shield, Huawei Tron, Amazon Fire Tv and Ouya playing altogether online, from many different countries at the same time, is unique and very cool.

We worked hard on that with our beta testers for over a year. We organised online test sessions where we ended up playing for several hours in a row altogether instead of just the one hour planned. We implemented 10 game modes. When our lead beta testers finally completed the solo campaign after 30 hours of gameplay and came back to us transformed, it made us smile.

We had people coming at GDC very early in the morning asking to continue their saved game that they started the previous day before the crowd would settle.

We demoed _Yummy Circus_ to young kids at a Science Festival: the smile of realization of that 6-year-old kid we put on a stool (he was too short to face the TV screen) when he understood how to play in multiplayer is something that touched me. I knew that when I handed him the Playstation 3 joypad that he had never used a joypad before. His mother was beside him, and she played too :-).

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-6.jpg)

<span style="font-size: 120%">**What was your experience like with OpenFL?**</span>

I started using Flash in 1999 and met great people on Flashkit.com. The "first gen" Flash community was really that groovy. We had to push the limits. Every time one would come up with a new technique to do this or that we would all try to get to know his secret. Andre, Paul, Tonypa, Squize, Raigan, Strille, Luxregina, Tomsamson, Marmotte, JobeMakar if you read this :-). I still remember the day when PercyPea came up with a fully functional mode 7 game engine: mind blown!

With OpenFL, it's a renewal. I started tinkering with NME and quickly approached Joshua for help to get the joypads working on micro-consoles. I had a need for something new. We got it working after a short period of time. Something impossible with Adobe: for years promises, even previews of feats, with next to zero delivery and in the end [betrayed angry developers](http://gamasutra.com/blogs/LarsDoucet/20140318/213407/Flash_is_dead_long_live_OpenFL.php). With the combo of Haxe/NME/OpenFL you can just do everything you have in mind and be confident about the future.

I have to say that working with open-source software, surrounded with keen people and minds, is extremely rewarding. Yes, you have to dig deep sometimes at the very core of some obscure source code and appreciate the sheer gigantism of the architecture, down to the metal to get what you wish working. But just the fact that you can do that and knowing that nobody can stop you from doing it is invaluable. And when you work with people doing just that too it feels good. I whined for features in the Slack chat sometimes, and then Sven would tell me: "Just do it." One would silently think "great help," but yes, it was :-). Getting hands dirty will teach you a thing or two, and you can give that new stuff back to the community. It is a positive experience.

Finally, after following _Papers, Please_ (made in Haxe/NME/OpenFL!) in its killing spree awards-winning at IGF and GDC (glory to Dukope) last year, I attended the Haxe conference in Paris. It was awesome. I met with Hugh, Cauê, Andreas, David "Blackmagic", Heinz, Simon, Elliott, Franco, Philippe, Todd, Alex, Camille... Joshua was missing but he was connected. Seeing almost everyone gathered together in the same room after years working remotely is something! Todd was kind enough to provide me with an Amazon Fire Tv (it was not released in Europe yet). I got the remote control of the device working in OpenFL with _Yummy Circus_ a day after the conference. Helping each other.

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-7.jpg)

<span style="font-size: 120%">**What advice would you give a new developer who wants to get started?**</span>

Do not hesitate to read, reach out and ask questions. OpenFL.org and [Haxe.org](https://groups.google.com/forum/?hl=en#!forum/haxelang) forums are good places to start.
Learn more about Haxe and its nebulae: Skial Bainn's [haxe.io](http://www.haxe.io) is a remarkable place to stay in touch with all the crazy things happening in the community. Be involved. Go to [Github](http://www.github.com/openfl), read the code and contribute if you feel like it. Change your mindset&mdash;free your mind&mdash;as there is no spoon in Haxe.
You need to think agnostic, multi-platform. It's not Flash, it's not PHP, it's not C++, it's not less, it is more&mdash;way more! Client and server. And microcontrollers. You can virtually program anything from your flying quadcopter with a microcontroller to a marketing program to an award-winning video game. Did I say microcontroller? Yeah.

I spent the last two years coding on _Yummy Circus_ and never gave up.

Be resilient, passionate and curious. That's a secret.

![Yummy Circus]({{ site.baseurl }}/blog/assets/yummycircus-8.png)

_[Yummy Circus](http://www.yummycircus.com) is coming soon for Nintendo Wii U, Mac OSX, Windows, Linux, Amazon Fire Tv, Razer Forge Tv, Nvidia Shield, Huawei Tron, OUYA, Madcatz MOJO and Google Nexus Player. If you have any questions for Nilsen, feel free to contact him on Twitter at [@puzzltweet](http://www.twitter.com/puzzltweet). You can also stay up-to-date with Puzzl and Yummy Circus by following [facebook.com/puzzl](http://www.facebook.com/puzzl), and Nilsen on [github.com/hasufel](http://www.github.com/hasufel)._
