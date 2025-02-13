---
title: OpenFL Features
---

## 2D Graphics

- [Draw vector lines, curves, and fills](https://books.openfl.org/openfl-developers-guide/using-the-drawing-api/)
- [Render bitmaps, and manipulate their pixels](https://books.openfl.org/openfl-developers-guide/working-with-bitmaps/)
- [Display text with custom fonts and formatting](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/)
- [Scale](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/manipulating-size-and-scaling-objects.html), [rotate](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/rotating-objects.html), and [position](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/changing-position.html) nodes with [matrix transformations](https://books.openfl.org/openfl-developers-guide/working-with-geometry/using-matrix-objects.html)
- [Opacity / alpha blending](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/fading-objects.html)
- [Solid colors, gradient, and bitmap line and fill styles](https://books.openfl.org/openfl-developers-guide/using-the-drawing-api/drawing-lines-and-curves.html#defining-line-and-fill-styles)
- [Masking](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/masking-display-objects.html)
- [Filters](https://api.openfl.org/openfl/filters/), like drop shadow, glow, and blur
- [Blend modes](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/applying-blending-modes.html), like multiply, screen, darken, lighten, and difference 

## Stage 3D GPU Graphics

- Programmable 3D graphics pipeline similar to OpenGL ES 2
- Vertex and pixel fragment shader programs
- Draw triangles
- Create textures from bitmaps or raw byte arrays
- Render to texture
- Mipmapping
- Scissor rects
- Blend factors
- Culling and depth testing

If you prefer, you can also use high-level libraries that are built on top of Stage 3D, like [Away3D](https://github.com/openfl/away3d) (for 3D) and [Starling](https://github.com/openfl/starling) (for 2D), that abstract away some of the lower level details.

## [Text Fields](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/)

- [Adjust font family, size, color, alignment, and letter-spacing](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/formatting-text.html)
- [Use bold, italic, and underline styles](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/formatting-text.html)
- [Embed custom fonts from TTF or OTF files](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/working-with-font-assets.html)
- Multi-line with optional word wrapping
- [Horizontal and vertical scrolling](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/displaying-text.html#scrolling-text-in-a-text-field)
- [Apply different styles to specific ranges of text](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/formatting-text.html#formatting-ranges-of-text-within-a-text-field)
- [Optional simplified HTML markup](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/displaying-text.html#displaying-html-text)
- [Optional simplified CSS styles](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/formatting-text.html#applying-cascading-style-sheets)
- [Capture text input from keyboard](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/capturing-text-input.html)
- [Select ranges of text with mouse and keyboard, or even programmatically](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/selecting-and-manipulating-text.html)
- Copy and paste strings with keyboard shortcuts
- [Restrict text input to specific characters or ranges of characters](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/restricting-text-input.html)

## [Sound / Audio](https://books.openfl.org/openfl-developers-guide/working-with-sound/)

- MP3, OGG Vorbis, and WAV formats (support depends on target)
- [Adjust volume on individual sounds](https://books.openfl.org/openfl-developers-guide/working-with-sound/controlling-sound-volume-and-panning.html)
- [Adjust left and right panning](https://books.openfl.org/openfl-developers-guide/working-with-sound/controlling-sound-volume-and-panning.html)
- [Pause and resume a sound](https://books.openfl.org/openfl-developers-guide/working-with-sound/playing-sounds.html#pausing-and-resuming-a-sound)
- Seek to a specific position
- [Embed sounds at compile-time](https://books.openfl.org/openfl-developers-guide/working-with-sound/working-with-sound-assets.html), [load them from external files, or from WWW URLs](https://books.openfl.org/openfl-developers-guide/working-with-sound/loading-external-sound-files.html)

## User input

### [Mouse](https://books.openfl.org/openfl-developers-guide/mouse-input/)

- Mouse button down, move, and up events
- Click and double-click events
- Middle and right mouse button events
- Mouse wheel events
- Roll over and roll out events 

### [Touch](https://books.openfl.org/openfl-developers-guide/touch-multitouch-and-gesture-input/)

- Multi-touch with tracking of touch point IDs
- Touch begin, move, and end events
- Tap event
- Primary touch point can optionally trigger mouse events as fallback

### Gamepads

- Connect and disconnect events
- Button up and down events
- Axis move events
- Custom mappings

### [Keyboard](https://books.openfl.org/openfl-developers-guide/keyboard-input/)

- Both physical keyboards and touchscreen soft keyboards
- [Key up and down events](https://books.openfl.org/openfl-developers-guide/keyboard-input/capturing-keyboard-input.html)
- Modifier keys, including ctrl, command, alt, and shift
- Use Tab and Shift+Tab to change focus between interactive display objects

### [Accelerometer](https://books.openfl.org/openfl-developers-guide/accelerometer-input/)

- Measure the physical motion of a mobile device
- X, Y, and Z axes
- Request a specific update interval in milliseconds

## Network communications

- [Load text or byte data from HTTP URLs](https://books.openfl.org/openfl-developers-guide/http-communications/loading-external-data.html#using-the-urlloader-class)
- [GET and POST HTTP request methods](https://api.openfl.org/openfl/net/URLRequestMethod.html)
- Session cookies
- [TCP sockets](https://api.openfl.org/openfl/net/Socket.html)
- [UDP sockets](https://api.openfl.org/openfl/net/DatagramSocket.html)
- [Server sockets](https://api.openfl.org/openfl/net/ServerSocket.html)

## [The display list](https://books.openfl.org/openfl-developers-guide/display-programming/)

- [A 2D scene graph with a hierarchy of nodes, called display objects](https://books.openfl.org/openfl-developers-guide/display-programming/basics-of-display-programming.html)
- [Supports various types of display objects:](https://books.openfl.org/openfl-developers-guide/display-programming/core-display-classes.html)
	- `Bitmap` displays bitmap/raster graphics
	- `Shape` renders scalable vector graphics
	- `Sprite` is a container that can add other display objects as children
	- `MovieClip` contains multiple frames that can play as an animation
	- `TextField` renders text with formatting
	- `SimpleButton` supports multiple states based on user input (up, over, down)
	- `Stage` is the root of the display list
- [Add, remove, and reorder children in a container](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/working-with-display-object-containers.html)
- Assign names to specific display objects to access them easily later
- [Tranforming a container's scale, rotation, and position automatically transforms its children too](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/working-with-display-object-containers.html)
- [Listen for user input events, like mouse, touch, and keyboard](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/handling-events-for-display-objects.html)
- [Cache as a bitmap](https://books.openfl.org/openfl-developers-guide/display-programming/manipulating-display-objects/caching-display-objects.html) for faster rendering
- Fast batched rendering with tilemaps

## [Events](https://books.openfl.org/openfl-developers-guide/handling-events/)

- [Dispatch](https://books.openfl.org/openfl-developers-guide/handling-events/event-listeners.html#dispatching-events) and [listen](https://books.openfl.org/openfl-developers-guide/handling-events/event-listeners.html#creating-a-listener-function) for events
- Supports adding multiple listeners for same event
- [Set priorities on event listeners to change calling order](https://books.openfl.org/openfl-developers-guide/handling-events/event-listeners.html#adding-event-listeners)
- [Weak event listeners](https://books.openfl.org/openfl-developers-guide/handling-events/event-listeners.html#adding-event-listeners) allow objects to be garbage collected (on supported targets)
- [Events may optionally be cancelable with `preventDefault()`](https://books.openfl.org/openfl-developers-guide/handling-events/event-objects.html#canceling-default-event-behavior)
- [Bubbling events](https://books.openfl.org/openfl-developers-guide/handling-events/event-objects.html#the-bubbles-property) climb up the display list from the target, to its parent, and continue to the stage
- A [capture phase](https://books.openfl.org/openfl-developers-guide/handling-events/the-event-flow.html) allows catching events before they reach their target
- Based on the W3C Document Object Model (DOM) Level 3 Events Specification

## Assets

- Embed [bitmaps](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/setting-stage-properties.html#controlling-the-playback-frame-rate), [audio files](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/setting-stage-properties.html#controlling-the-playback-frame-rate), [fonts](https://books.openfl.org/openfl-developers-guide/using-the-textfield-class/working-with-font-assets.html), [byte arrays](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/setting-stage-properties.html#controlling-the-playback-frame-rate), movie clips, and text data
- Preload assets before starting app, or load and unload assets on demand
- Package sets of assets into libraries, which can be loaded separately
- [Import assets from SWF files exported by Adobe Animate](/learn/haxelib/tutorials/using-swf-assets/)

## Animation

- [Dynamically adjustable frame rate](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/setting-stage-properties.html#controlling-the-playback-frame-rate)
- A [`MovieClip` display object](https://books.openfl.org/openfl-developers-guide/working-with-movie-clips/) may include multiple distinct frames that play in sequence
- [Listen for `Event.ENTER_FRAME`](https://books.openfl.org/openfl-developers-guide/display-programming/animating-objects.html) to programatically update your scene every frame
- Use `Timer` or `Lib.setInterval()` to programmatically update your scene on a specific time inverval (in milliseconds)

If you prefer, libraries like [Actuate](https://github.com/openfl/actuate) provide higher level APIs for time-based programmatic animation (sometimes called tweens)

## [File system access](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/) (on native targets)

- [System open and save dialogs](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/using-the-load-and-save-methods.html)
- Create or delete files and directories
- Load or save text or byte data from files
- [Copy, move, and rename files](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/working-with-files.html#copying-and-moving-files)
- [List files in a directory](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/working-with-directories.html#enumerating-directories)
- [Access system directory paths (user, documents, desktop, app, app storage)](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/working-with-file-objects-in-openfl.html#paths-of-file-objects)
- Access current working directory path
- Check if file exists, is a directory, or is hidden
- [Create temporary files and directories](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/working-with-files.html#creating-a-temporary-file)
- [Read size, last modified, and absolute path](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/working-with-files.html#getting-file-information)
- [Query system line endings and path separators](https://books.openfl.org/openfl-developers-guide/working-with-the-file-system/getting-file-system-information.html)

## Manage windows (on desktop native targets)

- Open multiple windows, each with a separate stage
- Resize and position windows with mouse, or programmaticaly
- Reorder windows by depth programmatically
- Activate window on demand
- Configure user's ability to resize, minimize, and maximize

## Miscellaneous

- [Copy and paste text from system clipboard](https://books.openfl.org/openfl-developers-guide/copy-and-paste/reading-from-and-writing-to-the-system-clipboard.html)
- [Full-screen or windowed rendering](https://books.openfl.org/openfl-developers-guide/display-programming/working-with-display-objects/setting-stage-properties.html#working-with-full-screen-mode)
- [Customize mouse cursors](https://books.openfl.org/openfl-developers-guide/mouse-input/capturing-mouse-input.html#customizing-the-mouse-cursor)
- Run executable processes, and read their output and exit codes, on native targets
- Object pooling for performance and memory optimization

> ## Want to give OpenFL a try?
> 
> Get started by [downloading OpenFL](/download/) and diving into the [OpenFL Developer's Guide](https://books.openfl.org/openfl-developers-guide/).
