---
title: Using the Improved OpenGL Bindings in Lime&nbsp;4
---

Lime 4 has been released, and among [other changes](https://github.com/openfl/lime/blob/develop/CHANGELOG.md#400-03152017), we have improved our support for OpenGL!

OpenGL has a large number of APIs, which may be available on only certain platforms (such as the desktop), or may require recent graphics drivers. This can create problems when seeking simplicity, broad device support or unifying cross-platform APIs. After much thought, we have designed a new system where we believe we can continue to expose new OpenGL APIs, while preserving the same simple cross-platform interoperability of current Lime releases.

Lime OpenGL support begins with a `GLRenderContext`. This API more closely resembles the native OpenGL and OpenGL ES APIs, but is designed to operate also in the browser. Optionally, there is a static `GL` class which access the last created context, but with multiple windows and future support for multiple OpenGL contexts, it was important that our native platforms move to GL context objects at the core, similar to how WebGL behaves.

The new Lime 4 API includes Haxe abstract types to provide guard rails or a more familiar syntax over the OpenGL context object:

```ts
var context:GLRenderContext;

...

var gl:WebGLContext = context;
var buffer = gl.createBuffer ();
gl.bindBuffer (gl.ARRAY_BUFFER, buffer);

var srcData = new Float32Array ([ 0, 1, 2, 3 ]);
gl.bufferData (gl.ARRAY_BUFFER, srcData, gl.DYNAMIC_DRAW);

...

var gl:GLES2Context = context;
var buffer = gl.createBuffer ();
gl.bindBuffer (gl.ARRAY_BUFFER, buffer);

var bytes = Bytes.alloc (16);
bytes.setFloat (0, 0);
bytes.setFloat (4, 1);
bytes.setFloat (8, 2);
bytes.setFloat (12, 3);
gl.bufferData (gl.ARRAY_BUFFER, 16, bytes, gl.DYNAMIC_DRAW);
```

In the WebGL API, the `count` is determined automatically by the size of the `ArrayBufferView` used to upload. In OpenGL and OpenGL ES, however, `bufferData` requires a size parameter. The downside is that this is more verbose, but the benefit is that we can create a data pointer from an `ArrayBufferView`, a `BytesObject`, or even a native pointer provided from a C++ extension library. Long-term, this can make things more flexible.

Although the `Bytes` example above is perhaps not as nice as using the `Float32Array`, either will work in the GLES2-style API. The benefit of being able to use pointers becomes more clear if you wish to upload multiple values from the same bytes object, such as in the following example:

```as3
var gl:WebGLContext = context;
var subData = data.subarray (0, 4);
gl.uniform4fv (location, subData);
var subData = data.subarray (4, 6);
gl.uniform2fv (location2, subData);
var subData = data.subarray (6, 10);
gl.uniform4fv (location3, subData);

...

var gl:GLES2Context = context;
var bytePointer = new BytePointer (data, 0);
gl.uniform4fv (location, 1, bytePointer);
bytePointer.offset = 4;
gl.uniform2fv (location2, 1, bytePointer);
bytePointer.offset = 6;
gl.uniform4fv (location3, 1, bytePointer);
```

In the WebGL API, a new `ArrayBufferView` must be created for each upload, which is not ideal due to the garbage objects that will need to be deleted by garbage collection in the future. In the `GLES2Context` example code, however, we are able to upload a pointer to the same byte object repeatedly, without allocating new objects.

If a GL context has been lost, Lime 4 will create a new `GLRenderContext` object, even if the same OpenGL context object is returned by the native platform. This adds another way to be able to check if an OpenGL object comes from an invalid OpenGL context:

```as3
private function getBuffer (gl:GLRenderContext):GLBuffer {
	
	if (buffer == null || bufferContext != gl) {
		
		buffer = gl.createBuffer ();
		bufferContext = gl;
		
	}
	
}
```

You can also use `bufferContext.isContextLost ()` on a dead context to determine if it is valid.

The `GLRenderContext` also exposes `type` and `version` properties, to make it easier to determine the current running environment, and what features may be available:

```as3
// WebGL
trace (gl.version); // 1
trace (gl.type);    // WEBGL

// WebGL 2
trace (gl.version); // 2
trace (gl.type);    // WEBGL

// OpenGL ES 2
trace (gl.version); // 2
trace (gl.type);    // GLES

// OpenGL ES 3
trace (gl.version); // 3
trace (gl.type);    // GLES

// OpenGL 4.2
trace (gl.version); // 4.2
trace (gl.type);    // OPENGL
```

You may choose to use the `GLRenderContext` directly (being careful which features you use), or you may choose to lock into a limited API, such as `WebGLContext` to run on all platform types. Currently, desktop OpenGL should support OpenGL ES 2 APIs that Lime 4 exposes, and both desktop and mobile GL should support WebGL APIs.

We are in the process of adding support for GLES3 APIs, and are considering additional abstract types for varying desktop GL versions. We appreciate your feedback as we continue to evolve support for advanced features, while also preserving cross-platform support.

Lime 4 also introduces many missing typed APIs, for example, `getString`, `getBoolean` or `getBooleanv` as an alternative to the WebGL `getParameter`. The goal is to support all of these APIs on all platforms, so HTML5 can have a typed forced on a parameter, while native can return a `Dynamic` type using `getParameter`, or specific type using a more exact API.

Lime 4 introduces better support for OpenGL extensions, beginning with known OpenGL ES 2 and WebGL extensions. With your feedback, we hope to continue to improve support for advanced features.

Thank you for your support! We are excited to continue to make Lime a better, more useful cross-platform layer!