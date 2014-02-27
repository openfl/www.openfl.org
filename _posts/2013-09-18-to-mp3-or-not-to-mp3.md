---
layout: post
title: To MP3, or Not to MP3?
date: 2013-09-18 03:12:48.000000000 -07:00
---
On the search for faster, better audio APIs, one of the limitations that held us back was looking for WAV, OGG <i>and</i> MP3 support. Together, these are the largest, most popular audio formats in game and application development, but is this really best for the community? There was a time when the answer would have been an "obvious" yes.

Have you seen the official licensing for MP3? Perhaps you should:<!--more--><a id="more-190"></a>

<a href="http://www.mp3licensing.com/royalty" target="_blank">http://www.mp3licensing.com/royalty</a>

Unless you have a special relationship with the&nbsp;Fraunhofer Institute, it costs $2,500 US dollars <i>per game</i>&nbsp;to use MP3 decoding.<em>
</em>

There are probably a lot of creative ways you could think of to spend $2,500. I would be surprised if your answer was, "MP3 support!"

As a result, we have decided that the next version of OpenFL will not include MP3 decoding support, but this also comes with great news! In the next release, we will be introducing a new audio subsystem, built upon OpenAL, for Windows, Mac and Linux. Time permitting, this will also be available for the Android target as well.

We are excited, because OpenAL has a long history for being a solid, reliable API for mixing audio. This will not only strengthen our support for our current audio API, it will pave the road for even more advanced uses of audio.

If you answered "MP3 support" above, then <a href="http://www.openfl.org/contact" target="_blank">contact us</a>. It&nbsp;<em>is&nbsp;</em>possible to support MP3 decoding, but we figure you would rather buy something modest, like the $2,500&nbsp;<a href="http://finance.yahoo.com/blogs/daily-ticker/rare-2-500-chicken-lamborghini-poultry-163825389.html" target="_blank">"Lamborghini" of poultry</a>.
