---
title: Tools
redirect_from:
 - /learn/docs/command-line-tools/
---

OpenFL includes command-line tools, which can be accessed from a Command-Prompt or Terminal window:

{% highlight bash %}
openfl
{% endhighlight %}

The OpenFL tools act as a front-end for the Lime command-line tools, so all the Lime commands can be used from the `openfl` command:

{% highlight bash %}
openfl help
openfl update flash
openfl build windows
openfl test html5
{% endhighlight %}

Some of the commands have slightly different behavior, as using the `openfl` command changes the default library, so `openfl create` is the similar to running `lime create openfl`, or `openfl setup` is similar to running `lime setup openfl`.

You can read more about the Lime command-line tools in the Lime documentation:

 * [Command-Line Tools](/lime/docs/command-line-tools/) (Lime)

The OpenFL tools also include support for processing SWF-based assets, to prepare them for use on the HTML5 and native platform targets. This is performed automatically when using OpenFL (whether you use `lime` or `openfl` to access those commands), or it can be done separately using the `openfl process` command:

{% highlight bash %}
openfl process example.swf
openfl process example.swf target/path/
openfl process example.swf target/path/example.bundle
{% endhighlight %}

This will process the SWF into a "\*.bundle" directory with all of the files used at runtime.

The `openfl process` command includes an optional second argument with an output path, or an output path and bundle name. If the second argument is omitted, the command will generate a file in the same directory, with the same name by default.