---
title: OpenFL Features
---

## 2D Graphics

- Draw vector lines, curves, and fills
- Render bitmaps, and manipulate their pixels
- Display text with custom fonts and formatting
- Scale, rotation, and translation transformations
- Opacity / alpha blending
- Solid, gradient, and bitmap line and fill styles
- Masking
- Filters, like drop shadow, glow, and blur
- Blend modes, like multiply, screen, darken, lighten, and difference 

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

## Text Fields

- Adjust font family, size, color, alignment, and letter-spacing
- Use bold, italic, and underline styles
- Embed custom fonts from TTF or OTF files
- Multi-line with optional word wrapping
- Horizontal and vertical scrolling
- Apply different styles to specific ranges of text
- Optional simplified HTML formatting
- Capture text input from keyboard
- Select ranges of text with mouse and keyboard, or even programmatically
- Copy and paste strings with keyboard shortcuts
- Restrict text input to specific characters or ranges of characters

## Sound / Audio

- MP3, OGG Vorbis, and WAV formats (support depends on target)
- Adjust volume on individual sounds
- Adjust left and right panning
- Stop and resume a sound
- Seek to a specific position
- Embed sounds at compile-time, load them from external files, or from WWW URLs

## User input

### Mouse

- Mouse button down, move, and up events
- Click and double-click events
- Middle and right mouse button events
- Vertical mouse wheel events
- Roll over and roll out events 

### Touch

- Multi-touch with tracking of touch point IDs
- Touch begin, move, and end events
- Tap event
- Primary touch point can optionally trigger mouse events as fallback

### Gamepads

- Connect and disconnect events
- Button up and down events
- Axis move events
- Custom mappings

### Keyboard

- Both physical keyboards and touchscreen soft keyboards
- Key up and down events
- Mouse wheel events
- Modifier keys, including ctrl, command, alt, and shift
- Use Tab and Shift+Tab to change focus between interactive display objects

### Accelerometer

- Measure the physical motion of a mobile device
- X, Y, and Z axes
- Request a specific update interval in milliseconds

## Network communications

- Load text or byte data from HTTP URLs
- GET and POST HTTP requests
- Session cookies
- TCP sockets
- UDP sockets
- Server sockets

## The display list

- A 2D scene graph with a hierarchy of nodes, called display objects
- Supports various types of display objects:
	- `Bitmap` displays bitmap/raster graphics
	- `Shape` renders scalable vector graphics
	- `Sprite` is a container that can add other display objects as children
	- `MovieClip` contains multiple frames that can play as an animation
	- `TextField` renders text with formatting
	- `SimpleButton` supports multiple states based on user input (up, over, down)
	- `Stage` is the root of the display list
- Add, remove, and reorder children in a container
- Assign names to specific display objects to access them easily later
- Tranforming a container's scale, rotation, and position automatically transforms its children too
- Listen for user input events, like mouse, touch, and keyboard
- Cache vectors or a container and all of its children as a bitmap for faster rendering
- Fast batched rendering with tilemaps

## Events

- Dispatch and listen for events
- Supports adding multiple listeners for same event
- Set priorities on event listeners to change calling order
- Weak event listeners allows objects to be garbage collected (on supported targets)
- Events may optionally be cancelable with `preventDefault()`
- Bubbling events climb up the display list from the target, to its parent, and continue to the stage
- A capture phase allows catching events before they reach their target
- Based on the W3C Document Object Model (DOM) Level 3 Events Specification

## Assets

- Embed bitmaps, audio files, fonts, byte arrays, movie clips, and text data
- Preload assets before starting app, or load and unload assets on demand
- Package sets of assets into libraries, which can be loaded separately
- Import assets from SWF files exported by Adobe Animate (formerly called Adobe Flash Pro)

## Animation

- Dynamically adjustable frame rate
- A `MovieClip` display object may include multiple distinct frames that play in sequence
- Listen for `Event.ENTER_FRAME` to programatically update your scene every frame
- Use `Timer` or `Lib.setInterval()` to programmatically update your scene on a specific time inverval (in milliseconds)

If you prefer, libraries like [Actuate](https://github.com/openfl/actuate) provide higher level APIs for time-based programmatic animation (sometimes called tweens)

## File system access (on native targets)

- System open and save dialogs
- Create or delete files and directories
- Load or save text or byte data from files
- Copy, move, and rename files
- List files in a directory
- Access system directory paths (user, documents, desktop, app, app storage)
- Access current working directory path
- Check if file exists, is a directory, or is hidden
- Create temporary files and directories
- Read size, last modified, and canonical path
- Query system line endings and path separators

## Manage windows (on desktop native targets)

- Open multiple windows, each with a separate stage
- Resize and position windows with mouse, or programmaticaly
- Reorder windows by depth programmatically
- Activate window on demand
- Configure user's ability to resize, minimize, and maximize

## Miscellaneous

- Copy and paste text from system clipboard
- Full-screen or windowed rendering
- Customize mouse cursors
- Run executable processes, and read their output and exit codes, on native targets
- Object pooling for performance and memory optimization

> ## Want to give OpenFL a try?
> 
> Get started by [downloading OpenFL](/download/) and diving into the [OpenFL Developer's Guide](https://books.openfl.org/openfl-developers-guide/).
