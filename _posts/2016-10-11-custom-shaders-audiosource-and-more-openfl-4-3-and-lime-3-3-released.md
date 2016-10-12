---
title: Custom Shaders, AudioSource and more -- OpenFL (4.3.0) and Lime (3.3.0) Released
---

Okay kids!

We have a fresh release of OpenFL, Lime, SWF and SVG out today.

As always, run `openfl upgrade` to fetch the latest.

These are some highlights:

## Improved Custom Shader System

Previously, we added support for custom shaders in OpenFL, but this did not follow the Flash API, and led to unfortunate number of regressions when combined with other core features. In OpenFL 4, we introduced a new internal OpenGL renderer designed to keep our core features working smoothly and properly.

Step-by-step, we have been moving past standard features, such as Bitmaps, to more complex features that have not worked properly in the past, such as scrollRect. With this release, we are improving our custom shader system, enabling support for custom shaders that define additional uniforms or sampler images.

Building on this system, we have implemented ColorMatrixFilter and ConvolutionFilter again, and have improved the behavior of ConvolutionFilter to more accurately mirror the behavior of the original Flash filter. You can use ShaderFilter to implement your own effects as well.

{% highlight haxe %}
var shader = new Shader ();
shader.glFragmentSource = 
	
	"varying float vAlpha;
	varying vec2 vTexCoord;
	uniform sampler2D uImage0;
	
	uniform bool useAlphaImage;
	uniform sampler2D uAlphaImage;
	
	void main(void) {
		
		vec4 color = texture2D (uImage0, vTexCoord);
		float alpha;
		
		if (useAlphaImage) {
			
			alpha = texture2D (uAlphaImage, vTexCoord).a;
			
		} else {
			
			alpha = color.a;
			
		}
		
		if (alpha == 0.0) {
			
			gl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);
			
		} else {
			
			gl_FragColor = vec4 (color.rgb / color.a, alpha * vAlpha);
			
		}
		
	}";

shader.data.useAlphaImage = [ true ];
shader.data.uAlphaImage.input = alphaBitmapData;

bitmap.filters = [ new ShaderFilter (shader) ];
{% endhighlight %}

## Updates to Lime AudioSource

We have made fixes to the Lime AudioSource API, adding Howler.js as a standard dependency on HTML5. As a result, we can remove the custom SoundJS audio support in OpenFL, and standardize on implementing Lime AudioSource as the playback engine on all non-Flash platforms.

{% highlight haxe %}
var audioSource = new AudioSource (Assets.getAudioBuffer ("sound.ogg"));
audioSource.play ();
{% endhighlight %}

## Tilemap Fixes

As we continue to improve the new Tilemap API in OpenFL, we have a number of small improvements to how it behaves. Similar to other DisplayObjects, Tilemap width and height will now return scaled values. If you set width or height, it will update the internal size and set the scale to 1. We also have improved how smoothing works on Flash Player, the underlying draw API we are using requires that we cut BitmapData into smaller objects in order to enable smoothing, so this is done internally only on the Flash target to increase consistency.

## Improvements to Lime Future

We have made a number of small changes to lime.app.Future in order to make it more useful, the most notable changes to Future include the addition of `ready` and `result`, which can be used to force sleep on native platforms to wait for either the Future to be finished, or to be finished and to return the `onComplete` result. These are helpful when you want a Future to block instead of returning asynchronously.

{% highlight haxe %}
var future = AudioBuffer.loadFromFile ("sound.ogg");
future.onComplete (completeHandler);
future.onError (errorHandler);
future.ready (); // will block until the result is ready
{% endhighlight %}

{% highlight haxe %}
var buffer = AudioBuffer.loadFromFile ("sound.ogg").result (); // will block and return result
{% endhighlight %}

## Miscellaneous Fixes

There are too many other improvements to mention here, but there are a lot of good ones! You can find the full CHANGELOG for OpenFL [here](https://github.com/openfl/openfl/blob/develop/CHANGELOG.md) or the CHANGELOG for Lime [here](https://github.com/openfl/lime/blob/develop/CHANGELOG.md).