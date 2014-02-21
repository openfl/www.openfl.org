---
layout: post
status: publish
published: true
title: Evolving the Android Extension API
author: admin
author_login: admin
author_email: joshua@joshuagranick.com
excerpt: ! "Similar to other native platforms, OpenFL supports C and C++ native extensions
  for Android.\r\n\r\nIn order to take advantage of certain SDKs or Android platform
  features, however, you may need to extend your AndroidManifest.xml, place hooks
  into the Activity events, or post callbacks to the native thread (where your Haxe
  code is running). These conspire to make Android (hands-down) the most complicated
  platform for native extensions."
wordpress_id: 208
wordpress_url: http://www.openfl.org/blog2/?p=208
date: 2013-10-03 21:18:28.000000000 -07:00
---
Similar to other native platforms, OpenFL supports C and C++ native extensions for Android.

In order to take advantage of certain SDKs or Android platform features, however, you may need to extend your AndroidManifest.xml, place hooks into the Activity events, or post callbacks to the native thread (where your Haxe code is running). These conspire to make Android (hands-down) the most complicated platform for native extensions.<!--more--><a id="more-208"></a>

We are excited to announce there are improvements coming to the Android Extension API.

First, the development version of our "openfl-tools" library now has support Android Library projects. This allows the Android SDK tools to merge multiple AndroidManifest.xml files, and helps modularize your code better. These dependencies will be compiled together when a user creates an OpenFL application for Android.

We have also added an Extension API in Java, which allows easy access to the main Activity, a handler to make calls back to the native code thread, and hooks into the onCreate, onDestroy (and other assorted) Android Activity events. This system will allow multiple Android-targeted extensions without modifying the GameActivity.

Together, these improvements should make it possible to write Java-based extensions for Android that are able to live together. No more overriding of templates. We appreciate your feedback and are excited about what this will enable.
