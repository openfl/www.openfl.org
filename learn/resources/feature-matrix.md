---
layout: default
title: Feature Matrix
permalink: learn/resources/feature-matrix/
---

# Feature Matrix

<style>th:not(:first-child) { text-align: center; }</style>

## openfl.display

### Bitmap

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bitmapData | yes | yes | yes | yes |
| pixelSnapping | yes | ignored | ignored | ignored |
| smoothing | yes | yes | yes | yes |

### BitmapData

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| height | yes | yes | yes | yes |
| rect | yes | yes | yes | yes |
| transparent | yes | yes | yes | yes |
| width | yes | yes | yes | yes |
| applyFilter | yes | partial | partial | planned |
| clone | yes | yes | yes | yes |
| colorTransform | yes | yes | yes | yes |
| copyChannel | yes | yes | yes | yes |
| copyPixels | yes | yes | yes | yes |
| dispose | yes | yes | yes | yes |
| draw | yes | yes | yes* | planned |
| encode | yes | planned | yes | planned |
| fillRect | yes | yes | yes | yes |
| floodFill | yes | yes | yes | yes |
| generateFilterRect | yes | ignored | ignored | ignored |
| getColorBoundsRect | yes | ignored | ignored | ignored |
| getPixel | yes | yes | yes | yes |
| getPixel32 | yes | yes | yes | yes |
| getPixels | yes | yes | yes | yes |
| getVector | yes | yes | yes | yes |
| histogram | yes | yes | yes | yes |
| hitTest | yes | planned | no | planned |
| lock | yes | yes | yes | yes |
| noise | yes | planned | yes | planned |
| paletteMap | yes | yes | yes | yes |
| perlinNoise | yes | no | partial | no |
| scroll | yes | planned | yes | planned |
| setPixel | yes | yes | yes | yes |
| setPixel32 | yes | yes | yes | yes |
| setPixels | yes | yes | yes | yes |
| setVector | yes | yes | yes | yes |
| threshold | yes | yes | yes | yes |
| unlock | yes | yes | yes | yes |

### DisplayObject

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| alpha | yes | yes | yes | yes |
| blendMode | yes | ignored | yes* | partial |
| cacheAsBitmap | yes | yes | yes* | planned |
| filters | yes | yes | yes | yes |
| loaderInfo | yes | yes | yes | yes |
| mouseX | yes | yes | yes | yes |
| mouseY | yes | yes | yes | yes |
| name | yes | yes | yes | yes |
| opaqueBackground | yes | planned | yes | planned |
| parent | yes | yes | yes | yes |
| root | yes | planned | partial | planned |
| rotation | yes | yes | yes | yes |
| scale9Grid | yes | ignored | ignored | ignored |
| scaleX | yes | yes | yes | yes |
| scaleY | yes | yes | yes | yes |
| scrollRect | yes | yes | yes | yes |
| stage | yes | yes | yes | yes |
| transform | yes | yes | yes | yes |
| visible | yes | yes | yes | yes |
| width | yes | yes | yes | yes |
| x | yes | yes | yes | yes |
| y | yes | yes | yes | yes |

### DisplayObjectContainer

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| mouseChildren | yes | yes | yes | yes |
| numChildren | yes | yes | yes | yes |
| tabChildren | yes | ignored | ignored | ignored |
| addChild | yes | yes | yes | yes |
| addChildAt | yes | yes | yes | yes |
| areInaccessibleObjectsUnderPoint | yes | ignored | ignored | ignored |
| contains | yes | yes | yes | yes |
| getChildAt | yes | yes | yes | yes |
| getChildByName | yes | yes | yes | yes |
| getChildIndex | yes | yes | yes | yes |
| getObjectsUnderPoint | yes | yes | yes | yes |
| removeChild | yes | yes | yes | yes |
| removeChildAt | yes | yes | yes | yes |
| removeChildren | yes | yes | yes | yes |
| setChildIndex | yes | yes | yes | yes |
| swapChildren | yes | yes | yes | yes |
| swapChildrenAt | yes | yes | yes | yes |

### FrameLabel

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| frame | yes | yes | yes | yes |
| name | yes | yes | yes | yes |

### Graphics

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| beginBitmapFill | yes | yes | yes | yes |
| beginFill | yes | yes | yes | yes |
| beginGradientFill | yes | no | partial | no |
| clear | yes | yes | yes | yes |
| copyFrom | yes | yes | no | yes |
| cubicCurveTo | yes | yes | no | yes |
| curveTo | yes | yes | yes | yes |
| drawCircle | yes | yes | yes | yes |
| drawEllipse | yes | yes | yes | yes |
| drawGraphicsData | yes | no | yes | no |
| drawPath | yes | no | yes | no |
| drawRect | yes | yes | yes | yes |
| drawRoundRect | yes | yes | yes | yes |
| drawRoundRectComplex | yes | no | no | no |
| drawTiles | yes | yes | yes | yes |
| drawTriangles | yes | yes | yes | yes |
| endFill | yes | yes | yes | yes |
| lineBitmapStyle | yes | no | partial | no |
| lineGradientStyle | yes | no | partial | no |
| lineStyle | yes | partial | partial | partial |
| lineTo | yes | yes | yes | yes |
| moveTo | yes | yes | yes | yes |

### GraphicsBitmapFill

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bitmapData | yes | yes | yes | yes |
| matrix | yes | yes | yes | yes |
| repeat | yes | yes | yes | yes |
| smooth | yes | yes | yes | yes |

### GraphicsEndFill

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### GraphicsGradientFill

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| alphas | yes | yes | yes | yes |
| colors | yes | yes | yes | yes |
| focalPointRatio | yes | yes | yes | yes |
| interpolationMethod | yes | yes | yes | yes |
| matrix | yes | yes | yes | yes |
| ratios | yes | yes | yes | yes |
| spreadMethod | yes | yes | yes | yes |
| type | yes | yes | yes | yes |

### GraphicsPath

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| commands | yes | yes | yes | yes |
| data | yes | yes | yes | yes |
| winding | yes | yes | yes | yes |
| curveTo | yes | yes | yes | yes |
| lineTo | yes | yes | yes | yes |
| moveTo | yes | yes | yes | yes |
| wideLineTo | yes | yes | yes | yes |
| wideMoveTo | yes | yes | yes | yes |

### GraphicsSolidFill

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| alpha | yes | yes | yes | yes |
| color | yes | yes | yes | yes |

### GraphicsStroke

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| caps | yes | yes | yes | yes |
| fill | yes | yes | yes | yes |
| joints | yes | yes | yes | yes |
| miterLimit | yes | yes | yes | yes |
| pixelHinting | yes | yes | yes | yes |
| scaleMode | yes | yes | yes | yes |
| thickness | yes | yes | yes | yes |

### InteractiveObject

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| doubleClickEnabled | yes | ignored | ignored | ignored |
| focusRect | yes | ignored | ignored | ignored |
| mouseEnabled | yes | yes | yes | yes |
| needsSoftKeyboard | yes | ignored | partial | ignored |
| softKeyboardInputAreaOfInterest | yes | ignored | ignored | ignored |
| tabEnabled | yes | ignored | ignored | ignored |
| tabIndex | yes | ignored | ignored | ignored |

### Loader

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| content | yes | yes | yes | yes |
| contentLoaderInfo | yes | yes | yes | yes |
| close | yes | no | no | no |
| load | yes | yes | yes | yes |
| loadBytes | yes | yes | yes | yes |
| unload | yes | yes | yes | yes |
| unloadAndStop | yes | no | no | no |

### LoaderInfo

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| applicationDomain | yes | ignored | ignored | ignored |
| bytes | yes | yes | yes | yes |
| bytesLoaded | yes | yes | yes | yes |
| bytesTotal | yes | yes | yes | yes |
| childAllowsParent | yes | ignored | ignored | ignored |
| content | yes | yes | yes | yes |
| contentType | yes | partial | partial | partial |
| frameRate | yes | ignored | ignored | ignored |
| height | yes | yes | yes | yes |
| loader | yes | yes | yes | yes |
| parameters | yes | ignored | ignored | ignored |
| parentAllowsChild | yes | ignored | ignored | ignored |
| sameDomain | yes | ignored | ignored | ignored |
| sharedEvents | yes | ignored | ignored | ignored |
| uncaughtErrorEvents | yes | partial | partial | partial |
| url | yes | yes | yes | yes |
| width | yes | yes | yes | yes |

### MovieClip

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| currentFrame | yes | yes | yes | yes |
| currentFrameLabel | yes | yes | yes | yes |
| currentLabel | yes | yes | yes | yes |
| currentLabels | yes | yes | yes | yes |
| enabled | yes | yes | yes | yes |
| framesLoaded | yes | yes | yes | yes |
| totalFrames | yes | yes | yes | yes |
| gotoAndPlay | yes | yes | yes | yes |
| gotoAndStop | yes | yes | yes | yes |
| nextFrame | yes | yes | yes | yes |
| play | yes | yes | yes | yes |
| prevFrame | yes | yes | yes | yes |
| stop | yes | yes | yes | yes |

### OpenGLView

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| isSupported | yes | yes | yes | yes |
| render | ignored | yes | yes | yes |

### Shape

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| graphics | yes | yes | yes | yes |

### SimpleButton

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| downState | yes | yes | yes | yes |
| enabled | yes | yes | yes | yes |
| hitTestState | yes | yes | yes | yes |
| overState | yes | yes | yes | yes |
| soundTransform | yes | ignored | ignored | ignored |
| trackAsMenu | yes | ignored | ignored | ignored |
| upState | yes | yes | yes | yes |
| useHandCursor | yes | yes | ignored | ignored |

### Sprite

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| buttonMode | yes | yes | ignored | ignored |
| graphics | yes | yes | yes | yes |
| useHandCursor | yes | yes | ignored | ignored |
| startDrag | yes | yes | yes | yes |
| stopDrag | yes | yes | yes | yes |

### Stage

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| align | yes | no | partial | no |
| color | yes | yes | yes | yes |
| displayState | yes | partial | yes | yes |
| focus | yes | partial | partial | partial |
| frameRate | yes | ignored | yes | yes |
| quality | yes | ignored | partial | ignored |
| stageFocusRect | yes | ignored | ignored | ignored |
| scaleMode | yes | no | partial | no |
| stageHeight | yes | yes | yes | yes |
| stageWidth | yes | yes | yes | yes |
| invalidate | yes | yes | yes | yes |

### Tilesheet

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| addTileRect | yes | yes | yes | yes |
| drawTiles | yes | yes | yes | yes |

## openfl.errors

### ArgumentError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### EOFError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### Error

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| errorID | yes | yes | yes | yes |
| message | yes | yes | yes | yes |
| name | yes | yes | yes | yes |
| getStackTrace | yes | yes | yes | yes |

### IllegalOperationError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### IOError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### RangeError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### SecurityError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### TypeError

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

## openfl.events

### AccelerometerEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| accelerationX | yes | yes | yes | yes |
| accelerationY | yes | yes | yes | yes |
| accelerationZ | yes | yes | yes | yes |
| timestamp | yes | yes | yes | yes |

### AsyncErrorEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| error | yes | yes | yes | yes |

### ContextMenuEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| contextMenuOwner | yes | ignored | ignored | ignored |
| mouseTarget | yes | ignored | ignored | ignored |

### DataEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| data | yes | yes | yes | yes |

### ErrorEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| errorID | yes | yes | yes | yes |

### Event

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bubbles | yes | yes | yes | yes |
| cancelable | yes | yes | yes | yes |
| currentTarget | yes | yes | yes | yes |
| eventPhase | yes | yes | yes | yes |
| target | yes | yes | yes | yes |
| type | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| isDefaultPrevented | yes | yes | yes | yes |
| stopImmediatePropagation | yes | yes | yes | yes |
| stopPropagation | yes | yes | yes | yes |

### EventDispatcher

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| addEventListener | yes | yes | yes | yes |
| dispatchEvent | yes | yes | yes | yes |
| hasEventListener | yes | yes | yes | yes |
| removeEventListener | yes | yes | yes | yes |
| willTrigger | yes | yes | yes | yes |

### FocusEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| keyCode | yes | yes | yes | yes |
| relatedObject | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |

### HTTPStatusEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| responseHeaders | yes | yes | yes | yes |
| responseURL | yes | yes | yes | yes |
| status | yes | yes | yes | yes |

### IOErrorEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### JoystickEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| axis | no | planned | yes | planned |
| device | no | planned | yes | planned |
| id | no | planned | yes | planned |
| x | no | planned | yes | planned |
| y | no | planned | yes | planned |
| z | no | planned | yes | planned |

### KeyboardEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| altKey | yes | yes | yes | yes |
| charCode | yes | yes | yes | yes |
| ctrlKey | yes | yes | yes | yes |
| commandKey | yes | yes | yes | yes |
| controlKey | yes | yes | yes | yes |
| keyCode | yes | yes | yes | yes |
| keyLocation | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |

### MouseEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| altKey | yes | yes | yes | yes |
| buttonDown | yes | yes | yes | yes |
| commandKey | yes | yes | yes | yes |
| clickCount | yes | yes | yes | yes |
| ctrlKey | yes | yes | yes | yes |
| delta | yes | yes | yes | yes |
| localX | yes | yes | yes | yes |
| localY | yes | yes | yes | yes |
| relatedObject | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |
| stageX | yes | yes | yes | yes |
| stageY | yes | yes | yes | yes |

### NetStatusEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| info | yes | yes | yes | yes |

### ProgressEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bytesLoaded | yes | yes | yes | yes |
| bytesTotal | yes | yes | yes | yes |

### SampleDataEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| data | yes | planned | yes | planned |
| position | yes | planned | yes | planned |

### SecurityErrorEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### TextEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| text | yes | yes | yes | planned |

### TimerEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

### TouchEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| altKey | yes | yes | yes | yes |
| buttonDown | yes | yes | yes | yes |
| commandKey | yes | yes | yes | yes |
| ctrlKey | yes | yes | yes | yes |
| delta | yes | yes | yes | yes |
| isPrimaryTouchPoint | yes | yes | yes | yes |
| localX | yes | yes | yes | yes |
| localY | yes | yes | yes | yes |
| pressure | yes | ignored | ignored | ignored |
| relatedObject | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |
| sizeX | yes | ignored | ignored | ignored |
| sizeY | yes | ignored | ignored | ignored |
| stageX | yes | yes | yes | yes |
| stageY | yes | yes | yes | yes |
| touchPointID | yes | yes | yes | yes |

### UncaughtErrorEvent

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| error | yes | yes | yes | yes |

### UncaughtErrorEvents

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| (available) | yes | yes | yes | yes |

## openfl.external

### ExternalInterface

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| available | yes | yes | ignored | ignored |
| marshallExceptions | yes | ignored | ignored | ignored |
| objectID | yes | ignored | ignored | ignored |

## openfl.filters

### BitmapFilter

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| clone | yes | yes | yes | yes |

### BlurFilter

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| blurX | yes | ignored | yes | ignored |
| blurY | yes | ignored | yes | ignored |
| quality | yes | ignored | yes | ignored |

### ColorMatrixFilter

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| matrix | yes | yes | yes | planned |

### DropShadowFilter

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| alpha | yes | ignored | yes | ignored |
| angle | yes | ignored | yes | ignored |
| blurX | yes | ignored | yes | ignored |
| blurY | yes | ignored | yes | ignored |
| color | yes | ignored | yes | ignored |
| distance | yes | ignored | yes | ignored |
| hideObject | yes | ignored | yes | ignored |
| inner | yes | ignored | yes | ignored |
| knockout | yes | ignored | yes | ignored |
| quality | yes | ignored | yes | ignored |
| strength | yes | ignored | yes | ignored |

### GlowFilter

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| alpha | yes | ignored | yes | ignored |
| blurX | yes | ignored | yes | ignored |
| blurY | yes | ignored | yes | ignored |
| color | yes | ignored | yes | ignored |
| inner | yes | ignored | yes | ignored |
| knockout | yes | ignored | yes | ignored |
| quality | yes | ignored | yes | ignored |
| strength | yes | ignored | yes | ignored |

## openfl.geom

### ColorTransform

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| alphaMultiplier | yes | yes | yes | yes |
| alphaOffset | yes | yes | yes | yes |
| blueMultiplier | yes | yes | yes | yes |
| blueOffset | yes | yes | yes | yes |
| color | yes | yes | yes | yes |
| greenMultiplier | yes | yes | yes | yes |
| greenOffset | yes | yes | yes | yes |
| redMultiplier | yes | yes | yes | yes |
| redOffset | yes | yes | yes | yes |
| concat | yes | yes | yes | yes |

### Matrix

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| a | yes | yes | yes | yes |
| b | yes | yes | yes | yes |
| c | yes | yes | yes | yes |
| d | yes | yes | yes | yes |
| tx | yes | yes | yes | yes |
| ty | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| concat | yes | yes | yes | yes |
| copyColumnFrom | yes | yes | yes | yes |
| copyColumnTo | yes | yes | yes | yes |
| copyFrom | yes | yes | yes | yes |
| copyRowFrom | yes | yes | yes | yes |
| copyRowTo | yes | yes | yes | yes |
| createBox | yes | yes | yes | yes |
| createGradientBox | yes | yes | yes | yes |
| equals | yes | yes | yes | yes |
| deltaTransformPoint | yes | yes | yes | yes |
| identity | yes | yes | yes | yes |
| invert | yes | yes | yes | yes |
| mult | yes | yes | yes | yes |
| rotate | yes | yes | yes | yes |
| scale | yes | yes | yes | yes |
| setRotation | yes | yes | yes | yes |
| setTo | yes | yes | yes | yes |
| transformPoint | yes | yes | yes | yes |
| translate | yes | yes | yes | yes |

### Matrix3D

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| determinant | yes | yes | yes | yes |
| position | yes | yes | yes | yes |
| rawData | yes | yes | yes | yes |
| append | yes | yes | yes | yes |
| appendRotation | yes | yes | yes | yes |
| appendScale | yes | yes | yes | yes |
| appendTranslation | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| copyColumnFrom | yes | yes | yes | yes |
| copyColumnTo | yes | yes | yes | yes |
| copyFrom | yes | yes | yes | yes |
| copyRawDataFrom | yes | yes | yes | yes |
| copyRawDataTo | yes | yes | yes | yes |
| copyRowFrom | yes | yes | yes | yes |
| create2D | no | yes | yes | yes |
| createABCD | no | yes | yes | yes |
| createOrtho | no | yes | yes | yes |
| copyRowTo | yes | yes | yes | yes |
| copyToMatrix3D | yes | yes | yes | yes |
| decompose | yes | yes | yes | yes |
| deltaTransformVector | yes | yes | yes | yes |
| getAxisRotation | yes | yes | yes | yes |
| identity | yes | yes | yes | yes |
| interpolate | yes | yes | yes | yes |
| interpolateTo | yes | yes | yes | yes |
| invert | yes | yes | yes | yes |
| pointAt | yes | yes | yes | yes |
| prepend | yes | yes | yes | yes |
| prependRotation | yes | yes | yes | yes |
| prependScale | yes | yes | yes | yes |
| prependTranslation | yes | yes | yes | yes |
| recompose | yes | yes | yes | yes |
| transformVector | yes | yes | yes | yes |
| transformVectors | yes | yes | yes | yes |
| transpose | yes | yes | yes | yes |

### PerspectiveProjection

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| fieldOfView | yes | yes | yes | yes |
| focalLength | yes | yes | yes | yes |
| projectionCenter | yes | yes | yes | yes |
| toMatrix3D | yes | yes | yes | yes |

### Point

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| length | yes | yes | yes | yes |
| x | yes | yes | yes | yes |
| y | yes | yes | yes | yes |
| add | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| distance | yes | yes | yes | yes |
| equals | yes | yes | yes | yes |
| interpolate | yes | yes | yes | yes |
| normalize | yes | yes | yes | yes |
| offset | yes | yes | yes | yes |
| polar | yes | yes | yes | yes |
| setTo | yes | yes | yes | yes |
| subtract | yes | yes | yes | yes |

### Rectangle

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bottom | yes | yes | yes | yes |
| bottomRight | yes | yes | yes | yes |
| height | yes | yes | yes | yes |
| left | yes | yes | yes | yes |
| right | yes | yes | yes | yes |
| size | yes | yes | yes | yes |
| top | yes | yes | yes | yes |
| topLeft | yes | yes | yes | yes |
| width | yes | yes | yes | yes |
| x | yes | yes | yes | yes |
| y | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| contains | yes | yes | yes | yes |
| containsPoint | yes | yes | yes | yes |
| containsRect | yes | yes | yes | yes |
| copyFrom | yes | yes | yes | yes |
| equals | yes | yes | yes | yes |
| inflate | yes | yes | yes | yes |
| inflatePoint | yes | yes | yes | yes |
| intersection | yes | yes | yes | yes |
| intersects | yes | yes | yes | yes |
| isEmpty | yes | yes | yes | yes |
| offset | yes | yes | yes | yes |
| offsetPoint | yes | yes | yes | yes |
| setEmpty | yes | yes | yes | yes |
| setTo | yes | yes | yes | yes |
| transform | yes | yes | yes | yes |
| union | yes | yes | yes | yes |

### Transform

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| colorTransform | yes | yes | yes | yes |
| concatenatedColorTransform | yes | yes | yes | yes |
| concatenatedMatrix | yes | yes | yes | yes |
| matrix | yes | yes | yes | yes |
| pixelBounds | yes | ignored | ignored | ignored |

### Utils3D

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| projectVector | yes | yes | yes | yes |

### Vector3D

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| length | yes | yes | yes | yes |
| lengthSquared | yes | yes | yes | yes |
| w | yes | yes | yes | yes |
| x | yes | yes | yes | yes |
| y | yes | yes | yes | yes |
| z | yes | yes | yes | yes |
| add | yes | yes | yes | yes |
| angleBetween | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| copyFrom | yes | yes | yes | yes |
| crossProduct | yes | yes | yes | yes |
| decrementBy | yes | yes | yes | yes |
| distance | yes | yes | yes | yes |
| dotProduct | yes | yes | yes | yes |
| equals | yes | yes | yes | yes |
| incrementBy | yes | yes | yes | yes |
| nearEquals | yes | yes | yes | yes |
| negate | yes | yes | yes | yes |
| normalize | yes | yes | yes | yes |
| project | yes | yes | yes | yes |
| scaleBy | yes | yes | yes | yes |
| setTo | yes | yes | yes | yes |
| subtract | yes | yes | yes | yes |

## openfl.media

### ID3Info

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| album | yes | ignored | ignored | ignored |
| artist | yes | ignored | ignored | ignored |
| comment | yes | ignored | ignored | ignored |
| genre | yes | ignored | ignored | ignored |
| songName | yes | ignored | ignored | ignored |
| track | yes | ignored | ignored | ignored |
| year | yes | ignored | ignored | ignored |

### Sound

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bytesLoaded | yes | yes | yes | yes |
| bytesTotal | yes | yes | yes | yes |
| id3 | yes | ignored | ignored | ignored |
| isBuffering | yes | ignored | ignored | ignored |
| length | yes | yes | yes | yes |
| url | yes | yes | yes | yes |
| close | yes | yes | yes | yes |
| load | yes | yes | partial | partial |
| loadCompressedDataFromByteArray | yes | no | yes | partial |
| loadPCMFromByteArray | yes | no | yes | partial |
| play | yes | yes | yes | partial |

### SoundChannel

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| leftPeak | yes | ignored | ignored | ignored |
| position | yes | yes | yes | yes |
| rightPeak | yes | ignored | ignored | ignored |
| soundTransform | yes | yes | yes | yes |
| stop | yes | yes | yes | yes |

### SoundLoaderContext

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bufferTime | yes | ignored | ignored | ignored |
| checkPolicyFile | yes | ignored | ignored | ignored |

### SoundTransform

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| leftToLeft | yes | yes | yes | yes |
| leftToRight | yes | yes | yes | yes |
| pan | yes | yes | yes | yes |
| rightToLeft | yes | yes | yes | yes |
| rightToRight | yes | yes | yes | yes |
| volume | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |

### Video

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| deblocking | yes | ignored | ignored | ignored |
| smoothing | yes | ignored | ignored | ignored |
| attachNetStream | yes | yes | no | no |
| clear | yes | ignored | ignored | ignored |

## openfl.net

### NetConnection

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| connect | yes | yes | ignored | ignored |

### NetStream

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| audioCodec | yes | ignored | ignored | ignored |
| bufferLength | yes | ignored | ignored | ignored |
| bufferTime | yes | ignored | ignored | ignored |
| bytesLoaded | yes | ignored | ignored | ignored |
| client | yes | ignored | ignored | ignored |
| currentFPS | yes | ignored | ignored | ignored |
| decodedFrames | yes | ignored | ignored | ignored |
| liveDelay | yes | ignored | ignored | ignored |
| objectEncoding | yes | ignored | ignored | ignored |
| soundTransform | yes | ignored | ignored | ignored |
| speed | yes | ignored | ignored | ignored |
| time | yes | ignored | ignored | ignored |
| videoCodec | yes | ignored | ignored | ignored |
| pause | yes | yes | ignored | ignored |
| play | yes | yes | ignored | ignored |
| resume | yes | yes | ignored | ignored |
| seek | yes | yes | ignored | ignored |
| togglePause | yes | yes | ignored | ignored |

### SharedObject

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| data | yes | yes | yes | yes |
| size | yes | yes | yes | yes |
| clear | yes | yes | yes | yes |
| flush | yes | yes | yes | yes |
| getLocal | yes | yes | yes | yes |
| setProperty | yes | yes | yes | yes |

### Socket

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bytesAvailable | yes | yes | yes | yes |
| bytesPending | yes | yes | yes | yes |
| timeout | yes | yes | yes | yes |
| objectEncoding | yes | ignored | ignored | ignored |
| endian | yes | yes | yes | yes |
| connected | yes | yes | yes | yes |
| connect | yes | yes | yes | yes |
| close | yes | yes | yes | yes |
| flush | yes | yes | yes | yes |
| readBoolean | yes | yes | yes | yes |
| readByte | yes | yes | yes | yes |
| readBytes | yes | yes | yes | yes |
| readDouble | yes | yes | yes | yes |
| readFloat | yes | yes | yes | yes |
| readInt | yes | yes | yes | yes |
| readMultiByte | yes | yes | yes | yes |
| readShort | yes | yes | yes | yes |
| readUnsignedByte | yes | yes | yes | yes |
| readUnsignedInt | yes | yes | yes | yes |
| readUnsignedShort | yes | yes | yes | yes |
| readUTF | yes | yes | yes | yes |
| readUTFBytes | yes | yes | yes | yes |
| writeBoolean | yes | yes | yes | yes |
| writeByte | yes | yes | yes | yes |
| writeBytes | yes | yes | yes | yes |
| writeDouble | yes | yes | yes | yes |
| writeFloat | yes | yes | yes | yes |
| writeInt | yes | yes | yes | yes |
| writeMultiByte | yes | yes | yes | yes |
| writeShort | yes | yes | yes | yes |
| writeUTF | yes | yes | yes | yes |
| writeUTFBytes | yes | yes | yes | yes |
| writeUnsignedInt | yes | yes | yes | yes |

### URLLoader

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bytesLoaded | yes | yes | yes | planned |
| bytesTotal | yes | yes | yes | planned |
| data | yes | yes | yes | planned |
| dataFormat | yes | yes | yes | planned |
| close | yes | ignored | ignored | ignored |
| load | yes | yes | yes | planned |

### URLRequest

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| contentType | yes | yes | yes | planned |
| data | yes | yes | yes | planned |
| method | yes | yes | yes | planned |
| requestHeaders | yes | yes | yes | planned |
| url | yes | yes | yes | planned |
| userAgent | yes | no | partial | planned |
| formatRequestHeaders | yes | yes | yes | planned |

### URLRequestHeader

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| name | yes | yes | yes | yes |
| value | yes | yes | yes | yes |

### URLVariables

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| decode | yes | yes | yes | yes |

### XMLSocket

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| connected | yes | yes | yes | ignored |
| timeout | yes | ignored | ignored | ignored |
| close | yes | yes | yes | ignored |
| connect | yes | yes | yes | ignored |
| connectWithProto | yes | partial | no | ignored |
| send | yes | yes | yes | ignored |

## openfl.sensors

### Accelerometer

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| isSupported | yes | ignored | yes | ignored |
| muted | yes | ignored | yes | ignored |
| setRequestedUpdateInterval | yes | ignored | yes | ignored |

## openfl.system

### ApplicationDomain

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| currentDomain | yes | ignored | ignored | ignored |
| parentDomain | yes | ignored | ignored | ignored |
| getDefinition | yes | ignored | ignored | ignored |
| hasDefinition | yes | ignored | ignored | ignored |

### Capabilities

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| hasAccessibility | yes | ignored | ignored | ignored |
| pixelAspectRatio | yes | yes | yes | planned |
| screenDPI | yes | yes | yes | planned |
| screenResolutionX | yes | yes | yes | planned |
| screenResolutionY | yes | yes | yes | planned |
| language | yes | yes | yes | planned |

### LoaderContext

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| allowCodeImport | yes | ignored | ignored | ignored |
| allowLoadBytesCodeExecution | yes | ignored | ignored | ignored |
| applicationDomain | yes | ignored | ignored | ignored |
| checkPolicyFile | yes | ignored | ignored | ignored |
| securityDomain | yes | ignored | ignored | ignored |

### Security

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| disableAVM1Loading | yes | ignored | ignored | ignored |
| exactSettings | yes | ignored | ignored | ignored |
| sandboxType | yes | ignored | ignored | ignored |
| allowDomain | yes | ignored | ignored | ignored |
| allowInsecureDomain | yes | ignored | ignored | ignored |
| loadPolicyFile | yes | ignored | ignored | ignored |

### SecurityDomain

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| currentDomain | yes | ignored | ignored | ignored |

### System

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| totalMemory | yes | ignored | yes | planned |
| useCodePage | yes | ignored | ignored | ignored |
| vmVersion | yes | ignored | ignored | ignored |
| exit | no | no | yes | planned |
| gc | no | no | yes | no |
| pause | no | no | yes | planned |
| resume | no | no | yes | planned |
| setClipboard | yes | no | no | planned |

## openfl.text

### Font

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| fontName | yes | yes | yes | yes |
| fontStyle | yes | ignored | ignored | ignored |
| fontType | yes | ignored | ignored | ignored |
| enumerateFonts | yes | partial | yes | partial |
| registerFont | yes | ignored | yes | yes |

### TextField

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| antiAliasType | yes | ignored | ignored | ignored |
| autoSize | yes | partial | partial | planned |
| background | yes | yes | yes | planned |
| backgroundColor | yes | yes | yes | planned |
| border | yes | yes | yes | planned |
| borderColor | yes | yes | yes | planned |
| bottomScrollV | yes | ignored | ignored | ignored |
| caretIndex | yes | ignored | ignored | ignored |
| caretPos | yes | ignored | ignored | ignored |
| defaultTextFormat | yes | yes | yes | planned |
| displayAsPassword | yes | no | yes | planned |
| embedFonts | yes | ignored | ignored | ignored |
| gridFitType | yes | ignored | ignored | ignored |
| htmlText | yes | partial | partial | planned |
| length | yes | yes | yes | planned |
| maxChars | yes | ignored | ignored | ignored |
| maxScrollH | yes | ignored | ignored | ignored |
| maxScrollV | yes | ignored | ignored | ignored |
| multiline | yes | yes | yes | planned |
| numLines | yes | yes | yes | planned |
| restrict | yes | ignored | ignored | ignored |
| scrollH | yes | ignored | ignored | ignored |
| scrollV | yes | ignored | ignored | ignored |
| selectable | yes | yes | yes | planned |
| selectionBeginIndex | yes | ignored | ignored | ignored |
| selectionEndIndex | yes | ignored | ignored | ignored |
| sharpness | yes | ignored | ignored | ignored |
| text | yes | yes | yes | planned |
| textColor | yes | yes | yes | planned |
| textHeight | yes | yes | yes | planned |
| textWidth | yes | yes | yes | planned |
| type | yes | yes | yes | planned |
| wordWrap | yes | yes | yes | planned |
| appendText | yes | yes | yes | planned |
| getCharBoundaries | yes | ignored | ignored | ignored |
| getCharIndexAtPoint | yes | ignored | ignored | ignored |
| getLineIndexAtPoint | yes | ignored | ignored | ignored |
| getLineMetrics | yes | ignored | ignored | ignored |
| getLineOffset | yes | ignored | ignored | ignored |
| getLineText | yes | ignored | ignored | ignored |
| getTextFormat | yes | yes | yes | planned |
| setSelection | yes | ignored | ignored | ignored |
| setTextFormat | yes | yes | yes | planned |

### TextFormat

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| align | yes | yes | yes | yes |
| blockIndent | yes | yes | yes | yes |
| bold | yes | yes | yes | yes |
| bullet | yes | yes | yes | yes |
| color | yes | yes | yes | yes |
| font | yes | yes | yes | yes |
| indent | yes | yes | yes | yes |
| italic | yes | yes | yes | yes |
| kerning | yes | yes | yes | yes |
| leading | yes | yes | yes | yes |
| leftMargin | yes | yes | yes | yes |
| letterSpacing | yes | yes | yes | yes |
| rightMargin | yes | yes | yes | yes |
| size | yes | yes | yes | yes |
| tabStops | yes | yes | yes | yes |
| target | yes | yes | yes | yes |
| underline | yes | yes | yes | yes |
| url | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |

### TextLineMetrics

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| ascent | yes | yes | yes | yes |
| descent | yes | yes | yes | yes |
| height | yes | yes | yes | yes |
| leading | yes | yes | yes | yes |
| width | yes | yes | yes | yes |
| x | yes | yes | yes | yes |

## openfl.ui

### Keyboard

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| capsLock | yes | yes | yes | yes |
| numLock | yes | yes | yes | yes |
| isAccessible | yes | ignored | ignored | ignored |

### Mouse

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| hide | yes | planned | yes | planned |
| show | yes | planned | yes | planned |

### Multitouch

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| inputMode | yes | partial | partial | partial |
| maxTouchPoints | yes | ignored | ignored | ignored |
| supportedGestures | yes | ignored | ignored | ignored |
| supportsGestureEvents | yes | ignored | ignored | ignored |
| supportsTouchEvents | yes | yes | yes | yes |

## openfl.utils

### ByteArray

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| bytesAvailable | yes | yes | yes | yes |
| endian | yes | yes | yes | yes |
| objectEncoding | yes | ignored | ignored | ignored |
| position | yes | yes | yes | yes |
| clear | yes | yes | yes | yes |
| compress | yes | no | yes | yes |
| deflate | yes | no | yes | yes |
| inflate | yes | yes | yes | yes |
| readBoolean | yes | yes | yes | yes |
| readByte | yes | yes | yes | yes |
| readBytes | yes | yes | yes | yes |
| readDouble | yes | yes | yes | yes |
| readFloat | yes | yes | yes | yes |
| readInt | yes | yes | yes | yes |
| readMultiByte | yes | yes | yes | yes |
| readShort | yes | yes | yes | yes |
| readUnsignedByte | yes | yes | yes | yes |
| readUnsignedInt | yes | yes | yes | yes |
| readUnsignedShort | yes | yes | yes | yes |
| readUTF | yes | yes | yes | yes |
| readUTFBytes | yes | yes | yes | yes |
| uncompress | yes | partial | yes | yes |
| writeBoolean | yes | yes | yes | yes |
| writeByte | yes | yes | yes | yes |
| writeBytes | yes | yes | yes | yes |
| writeDouble | yes | yes | yes | yes |
| writeFloat | yes | yes | yes | yes |
| writeInt | yes | yes | yes | yes |
| writeMultiByte | yes | yes | yes | yes |
| writeShort | yes | yes | yes | yes |
| writeUnsignedByte | yes | yes | yes | yes |
| writeUnsignedInt | yes | yes | yes | yes |
| writeUnsignedShort | yes | yes | yes | yes |
| writeUTF | yes | yes | yes | yes |
| writeUTFBytes | yes | yes | yes | yes |

### Timer

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| currentCount | yes | yes | yes | yes |
| delay | yes | yes | yes | yes |
| repeatCount | yes | yes | yes | yes |
| running | yes | yes | yes | yes |
| reset | yes | yes | yes | yes |
| start | yes | yes | yes | yes |
| stop | yes | yes | yes | yes |

## openfl

### Assets

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| cache | yes | yes | yes | yes |
| addEventListener | yes | yes | yes | yes |
| dispatchEvent | yes | yes | yes | yes |
| exists | yes | yes | yes | yes |
| getBitmapData | yes | yes | yes | yes |
| getBytes | yes | yes | yes | yes |
| getFont | yes | yes | yes | yes |
| getLibrary | yes | yes | yes | yes |
| getMovieClip | yes | yes | yes | yes |
| getMusic | yes | yes | yes | yes |
| getPath | yes | yes | yes | yes |
| getSound | yes | yes | yes | yes |
| getText | yes | yes | yes | yes |
| hasEventListener | yes | yes | yes | yes |
| isLocal | yes | yes | yes | yes |
| list | yes | yes | yes | yes |
| loadBitmapData | yes | yes | yes | yes |
| loadBytes | yes | yes | yes | yes |
| loadFont | yes | yes | yes | yes |
| loadLibrary | yes | yes | yes | yes |
| loadMusic | yes | yes | yes | yes |
| loadMovieClip | yes | yes | yes | yes |
| loadSound | yes | yes | yes | yes |
| loadText | yes | yes | yes | yes |
| registerLibrary | yes | yes | yes | yes |
| removeEventListener | yes | yes | yes | yes |
| unloadLibrary | yes | yes | yes | yes |
| cache | yes | yes | yes | yes |

### Lib

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| application | yes | yes | no | yes |
| current | yes | yes | yes | yes |
| embed | no | yes | no | no |
| getTimer | yes | yes | yes | yes |
| getURL | yes | yes | yes | planned |
| notImplemented | yes | yes | yes | yes |
| trace | yes | yes | yes | yes |

### Memory

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| getByte | yes | yes | yes | yes |
| getDouble | yes | yes | yes | yes |
| getFloat | yes | yes | yes | yes |
| getI32 | yes | yes | yes | yes |
| getUI16 | yes | yes | yes | yes |
| select | yes | yes | yes | yes |
| setByte | yes | yes | yes | yes |
| setDouble | yes | yes | yes | yes |
| setFloat | yes | yes | yes | yes |
| setI16 | yes | yes | yes | yes |
| setI32 | yes | yes | yes | yes |

### Vector

| Feature | Flash | HTML5 | Native | Native (Next) |
| ------- |:-----:|:-----:|:------:|:-------------:|
| length | yes | yes | yes | yes |
| fixed | yes | yes | yes | yes |
| concat | yes | yes | yes | yes |
| convert | yes | yes | yes | yes |
| copy | yes | yes | yes | yes |
| indexOf | yes | yes | yes | yes |
| join | yes | yes | yes | yes |
| lastIndexOf | yes | yes | yes | yes |
| pop | yes | yes | yes | yes |
| push | yes | yes | yes | yes |
| reverse | yes | yes | yes | yes |
| shift | yes | yes | yes | yes |
| unshift | yes | yes | yes | yes |
| slice | yes | yes | yes | yes |
| sort | yes | yes | yes | yes |
| splice | yes | yes | yes | yes |
| toArray | yes | yes | yes | yes |

_* Implemented using software rendering instead of hardware rendering_