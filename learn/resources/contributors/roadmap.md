---
layout: default
title: Roadmap
permalink: learn/resources/contributors/roadmap/
---

# Roadmap

## Lime

### Graphics

- [x] Create the render context API
- [x] Add bindings for the Flash render context
- [x] Add bindings for the DOM render context
- [x] Add bindings for the canvas render context
- [x] Add bindings for the OpenGL render context
- [x] Add image APIs for different data store types
- [ ] Draft a Lime API for font loading
- [ ] Draft a Lime API for complex text layout
- [ ] Draft a Lime API for accessing OpenGL ES 3/WebGL 2

### Audio

- [x] Create the audio context API
- [x] Add bindings for the Flash audio context
- [x] Add bindings for the HTML5 audio context
- [x] Add bindings for the Web Audio context
- [x] Add bindings for the OpenAL context
- [x] Build a simple managed API for audio playback (AudioSource)
- [ ] Add Flash audio support to AudioSource
- [ ] Add HTML5 audio support to AudioSource
- [ ] Add Web Audio support to AudioSource
- [x] Add OpenAL support to AudioSource

### Application

- [x] Create initial support for Lime applications
- [x] Create initial preloader support
- [x] Create the Lime event API
- [ ] Add support for Lime modules

### Input

- [x] Add support for mouse events
- [x] Add support for keyboard events
- [x] Add support for touch events
- [x] Add mapping for standard keycodes
- [ ] Add mouse locking support
- [ ] Add custom mouse cursor support
- [ ] Add text input event support
- [ ] Draft a Lime API for gamepad support

### Backends

- [x] Build Flash backend support
- [x] Build HTML5 backend support
- [x] Build SDL2 backend support for Windows
- [x] Build SDL2 backend support for OS X
- [x] Build SDL2 backend support for Linux
- [ ] Build SDL2 backend support for iOS
- [ ] Build SDL2 backend support for Android
- [ ] Build custom backend support (using Glview) for BlackBerry
- [ ] Consider adding Node.js backend support (using native module)
- [ ] Consider adding Java VM backend support
- [ ] Consider adding Unity backend support

### Networking

- [x] Add bindings to cURL for native platforms
- [x] Add a temporary URLLoader implementation
- [ ] Draft a Lime API for single network requests
- [ ] Consider if a socket API is needed

### System

- [x] Support loading of C++ modules from Haxe code
- [ ] Consider support of Neko VM modules
- [ ] Consider support of JavaScript-based modules
- [ ] Add system clipboard support
- [ ] Add mobile system APIs as available

### Utilities

- [x] Add an implementation of JS typed arrays for all platforms
- [ ] Move to an abstract implementation for better performance

### Miscellaneous

- [x] Generate API documentation
- [ ] Add more inline documentation
- [ ] Build a test suite to validate API support

### Legacy

- [x] Migrate the Lime legacy binary source into the same repository

---

## OpenFL

### Internal

- [x] Create an OpenFL Application class (using Lime)
- [x] Create a DOM context rendering path (using Lime)
- [x] Create a canvas context rendering path (using Lime)
- [x] Create an OpenGL context rendering path (using Lime)
- [x] Preserve Flash API compatibility through typedefs

### Display

- [x] Move BitmapData to using the Lime Image type under-the-hood
- [ ] Allow multiple BitmapData objects to share the same Image
- [ ] Implement support for additional blend modes in canvas
- [ ] Implement support for additional blend modes (as available) in OpenGL
- [ ] Validate the accuracy of canvas Graphics rendering
- [ ] Validate the accuracy of OpenGL Graphics rendering
- [ ] Investigate edge smoothing for OpenGL Graphics

### Events

- [x] Validate the accuracy of the event bubble/capture behavior
- [ ] Dispatch ENTER_FRAME events even when objects are not in the display list
- [ ] Dispatch FRAME_CONSTRUCTED and EXIT_FRAME events
- [ ] Ensure that frame events remain optimized for objects that ignore them

### Filters

- [ ] Restore bitmap filter support in OpenGL (-Dnext)
- [ ] Investigate additional filter support in canvas

### Media

- [x] Implement audio support using the Lime AudioSource API
- [x] Use SoundJS until Lime has HTML5 support in AudioSource
- [ ] Implement streaming audio support again (-Dnext)
- [x] Add Video support in HTML5 DOM
- [x] Add support for BinkVideo for mobile platforms
- [ ] Investigate OS/StageVideo support for mobile platforms
- [ ] Investigate options for video on desktop platforms

### Text

- [x] Support textFormat.font using the true font name on all targets
- [x] Add initial support for TextField using DOM
- [x] Add initial support for TextField using canvas
- [ ] Add initial support for TextField using OpenGL (-Dnext)
- [ ] Investigate additional features for bitmap fonts
- [ ] Support HTML text on all targets
- [ ] Improve handling of center- and right-aligned text
- [ ] Improve support for Unicode input
- [ ] Support complex text layout for languages like Hebrew or Arabic

### UI

- [x] Implement gamepad support as joystick events
- [ ] Add support for the Flash GameInput API
- [ ] Add custom mouse cursor support

### Stage3D

- [ ] Consider including the Away3D Stage3D layer as a core part of the library

### Miscellaneous

- [x] Generate API documentation
- [ ] Migrate inline documentation into classes again
- [ ] Update inline documentation to be more specific to OpenFL
- [x] Build a test suite to validate API support
- [ ] Write additional tests to prevent regressions
- [ ] Write more documentation

_* Features marked with (-Dnext) are available already for native targets, but are being implemented again for the OpenFL "next" architecture._