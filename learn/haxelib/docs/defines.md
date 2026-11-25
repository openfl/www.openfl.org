---
title: OpenFL Defines
---

OpenFL reads a number of defines for [conditional compilation](https://haxe.org/manual/lf-condition-compilation.html). Most of them change how OpenFL renders, or turn off a behavior that some projects do not want.

To add a define, use the `-D` option on the command line, or add a `<haxedef />` to your [project file](../project-files/):

```sh
openfl test html5 -Dopenfl_disable_hdpi
```

```xml
<haxedef name="openfl_pool_events" />
```

Haxe treats hyphens and underscores in a define's name as the same, so `-Dopenfl-disable-hdpi` and `-Dopenfl_disable_hdpi` are equivalent.

OpenFL runs on Lime, so Lime's defines apply too. For example, `-Dcanvas` and `-Ddom` choose a renderer on HTML5, and `-Dcairo` forces software rendering on native targets. For those, and for more about setting defines in a project file, read the Lime documentation:

 * [Defines](https://lime.openfl.org/docs/project-files/defines/) (Lime)

## Set by OpenFL

| Define | Description |
|---|---|
| `openfl` | OpenFL is in use. In Haxe code it holds the OpenFL version. |
| `openfl-native` | OpenFL's native backend, for C++, HashLink and Neko. |
| `openfl-html5` | OpenFL's HTML5 backend. |
| `openfl-flash` | Flash Player and Adobe AIR, where OpenFL uses the Flash API directly. |
| `openfl-disable-handle-error` | Set for debug builds. See [Errors and debugging](#errors-and-debugging). |
{: .table}

## Rendering

| Define | Description |
|---|---|
| `openfl_disable_hdpi` | Draw at the stage's own resolution on HiDPI screens, instead of at the window's scale. Content looks softer, but uses less memory. |
| `openfl_disable_hdpi_graphics` | The same, for vector graphics drawn in software only. |
| `openfl_disable_hdpi_textfield` | The same, for text fields drawn in software only. |
| `openfl_disable_hdpi_cacheasbitmap` | The same, for cached bitmaps only. |
| `openfl_dpi_aware` | On HiDPI screens, size the stage in physical pixels: `stageWidth` and `stageHeight` match the window's size in pixels, and content is not scaled up. By default the stage is measured in logical pixels and scaled to the screen. |
| `openfl_always_render` | Render every frame, even when nothing on the stage has changed. |
| `openfl_disable_display_render` | Do not render the display list, for applications that draw everything with Stage3D. |
| `openfl_force_sw_graphics` | OpenGL: draw all vector graphics in software first, then upload them as a texture. `force_sw_graphics` does the same. |
| `openfl_force_hw_graphics` | OpenGL: draw all vector graphics directly on the GPU, even shapes that would otherwise be drawn in software first. Lines, and shapes drawn with `lineTo()` or `curveTo()`, are left out. `force_hw_graphics` does the same. |
| `openfl_disable_graphics_upscaling` | When vector graphics drawn in software are scaled up, stretch the existing image instead of drawing it again at the larger size. |
| `openfl_disable_graphics_pixel_snapping` | Do not round the position of vector graphics to the nearest pixel, or to the nearest device pixel on HiDPI screens. |
| `openfl_legacy_scale9grid` | Use the `scale9Grid` implementation for `Graphics` from before OpenFL 9.5.0. |
| `openfl_force_gl_cacheasbitmap_for_scale9grid` | With `openfl_legacy_scale9grid`, cache objects that have a `scale9Grid` as bitmaps when rendering with OpenGL, as older versions did. |
| `openfl_power_of_two` | Round texture sizes up to a power of two, for hardware that needs it. |
| `openfl_share_context` | Give every `Stage3D` the stage's own `Context3D`, instead of a `Context3D` of its own. |
| `openfl_disable_context_cache` | `Context3D` sets the OpenGL state every time, instead of skipping state that has not changed. Useful when other code makes OpenGL calls of its own. |
| `gl_debug` | Turn on the OpenGL driver's debug output, where the `KHR_debug` extension is available. |
| `gl_stats` | Count draw calls. `openfl.display.FPS` shows the totals. |
{: .table}

## cacheAsBitmap and filters

| Define | Description |
|---|---|
| `openfl_disable_cacheasbitmap` | Ignore `cacheAsBitmap`, and always draw objects directly. |
| `openfl_enable_cacheasbitmap` | DOM rendering: honor `cacheAsBitmap` for objects without filters, which DOM rendering otherwise ignores. |
| `openfl_disable_gl_cacheasbitmap` | OpenGL: draw cached bitmaps in software. |
| `openfl_force_gl_cacheasbitmap` | OpenGL: draw cached bitmaps on the GPU, even for content that would otherwise be cached in software. |
| `openfl_disable_filters` | Do not draw `filters`. |
{: .table}

## Text

| Define | Description |
|---|---|
| `openfl_disable_text_measurement_cache` | HTML5: measure text every time it is laid out, instead of caching the measurements. |
| `openfl_hack_fix_chrome_text` | HTML5: work around a bug in Chrome that garbles text drawn on a canvas. |
| `openfl_measuretext_div` | HTML5: also apply each font that is measured to a hidden HTML element. |
| `openfl_cairo_show_text` | Cairo: draw text with Cairo's own text drawing, instead of drawing the glyphs placed by OpenFL's text layout. |
| `notextselectscroll` | Do not scroll a text field when a selection is dragged past its edge. |
| `openfl_trace_text_layout_groups` | Log the layout groups of each text field as it is laid out. |
{: .table}

## Events and input

| Define | Description |
|---|---|
| `openfl_pool_events` | Reuse event objects for events that are dispatched often, such as mouse, touch and render events, so they make less garbage. A listener must not keep a reference to one of these events after it returns. |
| `openfl_always_dispatch_mouse_events` | Dispatch `MouseEvent.MOUSE_MOVE` for every movement the system reports, instead of at most once per frame. |
| `openfl_numpad_enter` | Report the Enter key on the number pad as `Keyboard.NUMPAD_ENTER` instead of `Keyboard.ENTER`. |
| `openfl_enable_experimental_update_queue` | Each frame, update only the display objects that changed, instead of the whole display list. Experimental, and not used with DOM rendering. |
{: .table}

## Errors and debugging

| Define | Description |
|---|---|
| `openfl-disable-handle-error` | Let an error thrown by an event listener stop the application, so a debugger shows where it happened, instead of dispatching it as an `UncaughtErrorEvent`. OpenFL sets this for debug builds. |
| `openfl-enable-handle-error` | Dispatch errors as an `UncaughtErrorEvent`, even in debug builds. |
| `openfl_debug` | C++: build OpenFL's own classes as debug code in debug builds. Otherwise they are built as release code, which keeps debug builds fast, and the debugger does not step into them. |
| `openfl_strict` | Leave out Flash APIs that OpenFL does not implement, such as `System.pause()`, `Loader.close()` and `InteractiveObject.requestSoftKeyboard()`, so code that calls them does not compile. |
{: .table}

## Profiling

| Define | Description |
|---|---|
| `telemetry` | Native: profile with HxScout through the `hxtelemetry` haxelib, which OpenFL adds to the build. Flash: turn on Adobe Scout's advanced telemetry. |
| `openfl-telemetry` | The same as `telemetry` on native targets, and also builds OpenFL and Lime's classes as debug code, so they show up in the profile. |
| `advanced-telemetry` | The same as `telemetry` on native targets. On Flash, this is the Haxe define that `telemetry` sets. |
| `HXCPP_TRACY` | When profiling with hxcpp's support for Tracy, OpenFL marks the end of each frame. |
{: .table}

## Other defines

| Define | Description |
|---|---|
| `openfl_big_endian` | Make `BIG_ENDIAN` the default for new `ByteArray` objects, as in Flash. Otherwise the default matches the system. |
| `openfl_capabilities_version` | Report this Flash or AIR runtime version in `Capabilities.version`, such as `-Dopenfl_capabilities_version=51,1,3,0`, for code that checks it, such as Starling. Requires a build of OpenFL newer than 9.5.2. |
| `mute`, `mute_sound` | Start with all sound muted. |
| `openfl_dynamic` | Haxe 3 only: allow any field to be read from a `DisplayObject` or `MovieClip`, as in ActionScript. |
{: .table}

## Project file

These are read in the project file, rather than in Haxe code.

| Define | Description |
|---|---|
| `lime-version` | The version of Lime to use, such as `<set name="lime-version" value="8.3.2" />`, placed before `<haxelib name="openfl" />`. |
| `disable-version-check` | Do not check whether the version of Lime in use is compatible with OpenFL. |
| `draft` | Add OpenFL's draft APIs, which are experimental, such as `SQLConnection` and `NativeMenu`. |
| `openfl-no-default-fonts` | Do not package OpenFL's fallback fonts on targets that have no system fonts of their own. |
{: .table}

OpenFL also checks a few defines while building its documentation, its npm package and its tests. They are not meant for applications, and may change without notice: `openfl_doc_gen`, `flash_doc_gen`, `air_doc_gen`, `doc_gen`, `openfljs`, `openfl-html5-extern`, `commonjs`, `openfl_unit_testing`, `openfl_enable_utest_legacy_mode` and `no_openfl_entry_point`.
