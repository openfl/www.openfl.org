---
layout: default
title: Feature Matrix
permalink: learn/resources/feature-matrix/
---

# Feature Matrix

<style>th:not(:first-child) { text-align: center; }</style>

## openfl.desktop

### Clipboard

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| formats | yes | yes | yes | no |
| clear | yes | yes | yes | no |
| clearData | yes | yes | yes | no |
| getData | yes | partial | partial | no |
| hasFormat | yes | yes | yes | no |
| setData | yes | yes | yes | no |
| setDataHandler | yes | ignored | ignored | no |

## openfl.display

### Bitmap

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bitmapData | yes | yes | yes | yes |
| pixelSnapping | yes | ignored | ignored | ignored |
| smoothing | yes | yes | yes | yes |

### BitmapData

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| height | yes | yes | yes | yes |
| rect | yes | yes | yes | yes |
| transparent | yes | yes | yes | yes |
| width | yes | yes | yes | yes |
| applyFilter | yes | partial | partial | planned |
| clone | yes | yes | yes | yes |
| colorTransform | yes | yes | yes | yes |
| compare | yes | yes | yes | no |
| copyChannel | yes | yes | yes | yes |
| copyPixels | yes | yes | yes | yes |
| dispose | yes | yes | yes | yes |
| draw | yes | yes | yes* | yes* |
| encode | yes | yes** | yes | yes |
| fillRect | yes | yes | yes | yes |
| floodFill | yes | yes | yes | yes |
| generateFilterRect | yes | ignored | ignored | ignored |
| getColorBoundsRect | yes | yes | yes | yes |
| getPixel | yes | yes | yes | yes |
| getPixel32 | yes | yes | yes | yes |
| getPixels | yes | yes | yes | yes |
| getVector | yes | yes | yes | yes |
| histogram | yes | yes | yes | yes |
| hitTest | yes | yes | yes | no |
| lock | yes | yes | yes | yes |
| merge | yes | yes | yes | no |
| noise | yes | planned | planned | yes |
| paletteMap | yes | yes | yes | yes |
| perlinNoise | yes | no | no | partial |
| scroll | yes | yes | yes | yes |
| setPixel | yes | yes | yes | yes |
| setPixel32 | yes | yes | yes | yes |
| setPixels | yes | yes | yes | yes |
| setVector | yes | yes | yes | yes |
| threshold | yes | yes | yes | yes |
| unlock | yes | yes | yes | yes |

### DisplayObject

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| alpha | yes | yes | yes | yes |
| blendMode | yes | ignored | partial | yes* |
| cacheAsBitmap | yes | planned | planned | yes* |
| filters | yes | partial | planned | yes |
| height | yes | yes | yes | yes |
| loaderInfo | yes | yes | yes | yes |
| mask | yes | yes | yes | yes |
| mouseX | yes | yes | yes | yes |
| mouseY | yes | yes | yes | yes |
| name | yes | yes | yes | yes |
| opaqueBackground | yes | planned | planned | yes |
| parent | yes | yes | yes | yes |
| root | yes | partial | partial | partial |
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| frame | yes | yes | yes | yes |
| name | yes | yes | yes | yes |

### Graphics

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| beginBitmapFill | yes | yes | yes | yes |
| beginFill | yes | yes | yes | yes |
| beginGradientFill | yes | yes | yes | partial |
| clear | yes | yes | yes | yes |
| copyFrom | yes | yes | yes | no |
| cubicCurveTo | yes | yes | yes | no |
| curveTo | yes | yes | yes | yes |
| drawCircle | yes | yes | yes | yes |
| drawEllipse | yes | yes | yes | yes |
| drawGraphicsData | yes | yes | yes | no |
| drawPath | yes | yes | yes | yes |
| drawRect | yes | yes | yes | yes |
| drawRoundRect | yes | yes | yes | yes |
| drawRoundRectComplex | yes | no | no | no |
| drawTiles | yes | yes | yes | yes |
| drawTriangles | yes | yes | yes | yes |
| endFill | yes | yes | yes | yes |
| lineBitmapStyle | yes | no | no | partial |
| lineGradientStyle | yes | no | no | partial |
| lineStyle | yes | partial | partial | partial |
| lineTo | yes | yes | yes | yes |
| moveTo | yes | yes | yes | yes |

### GraphicsBitmapFill

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bitmapData | yes | yes | yes | yes |
| matrix | yes | yes | yes | yes |
| repeat | yes | yes | yes | yes |
| smooth | yes | yes | yes | yes |

### GraphicsEndFill

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### GraphicsGradientFill

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| alphas | yes | yes | yes | yes |
| colors | yes | yes | yes | yes |
| focalPointRatio | yes | yes | yes | yes |
| interpolationMethod | yes | yes | yes | yes |
| matrix | yes | yes | yes | yes |
| ratios | yes | yes | yes | yes |
| spreadMethod | yes | yes | yes | yes |
| type | yes | yes | yes | yes |

### GraphicsPath

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| commands | yes | yes | yes | yes |
| data | yes | yes | yes | yes |
| winding | yes | yes | yes | yes |
| curveTo | yes | yes | yes | yes |
| lineTo | yes | yes | yes | yes |
| moveTo | yes | yes | yes | yes |
| wideLineTo | yes | yes | yes | yes |
| wideMoveTo | yes | yes | yes | yes |

### GraphicsSolidFill

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| alpha | yes | yes | yes | yes |
| color | yes | yes | yes | yes |

### GraphicsStroke

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| caps | yes | yes | yes | yes |
| fill | yes | yes | yes | yes |
| joints | yes | yes | yes | yes |
| miterLimit | yes | yes | yes | yes |
| pixelHinting | yes | yes | yes | yes |
| scaleMode | yes | yes | yes | yes |
| thickness | yes | yes | yes | yes |

### InteractiveObject

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| doubleClickEnabled | yes | ignored | ignored | ignored |
| focusRect | yes | ignored | ignored | ignored |
| mouseEnabled | yes | yes | yes | partial |
| needsSoftKeyboard | yes | ignored | ignored | partial |
| softKeyboardInputAreaOfInterest | yes | ignored | ignored | ignored |
| tabEnabled | yes | partial | partial | ignored |
| tabIndex | yes | ignored | ignored | ignored |

### JPEGEncoderOptions

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| quality | yes | yes | yes | yes |

### Loader

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| content | yes | yes | yes | yes |
| contentLoaderInfo | yes | yes | yes | yes |
| close | yes | no | no | no |
| load | yes | yes | yes | yes |
| loadBytes | yes | yes | yes | yes |
| unload | yes | yes | yes | yes |
| unloadAndStop | yes | no | no | no |

### LoaderInfo

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| isSupported | yes | yes | yes | yes |
| render | ignored | yes | yes | yes |

### PNGEncoderOptions

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| fastCompression | yes | ignored | ignored | ignored |

### Shape

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| graphics | yes | yes | yes | yes |

### SimpleButton

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| downState | yes | yes | yes | yes |
| enabled | yes | yes | yes | yes |
| hitTestState | yes | yes | yes | yes |
| overState | yes | yes | yes | yes |
| soundTransform | yes | ignored | ignored | ignored |
| trackAsMenu | yes | ignored | ignored | ignored |
| upState | yes | yes | yes | yes |
| useHandCursor | yes | yes | yes | ignored |

### Sprite

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| buttonMode | yes | yes | yes | ignored |
| graphics | yes | yes | yes | yes |
| useHandCursor | yes | yes | yes | ignored |
| startDrag | yes | yes | yes | yes |
| stopDrag | yes | yes | yes | yes |

### Stage

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| align | yes | no | no | partial |
| allowsFullscren | yes | ignored | ignored | no |
| color | yes | yes | yes | yes |
| displayState | yes | partial | yes | yes |
| focus | yes | yes | yes | partial |
| frameRate | yes | yes | yes | yes |
| invalidate | yes | yes | yes | yes |
| quality | yes | ignored | ignored | partial |
| stage3ds | yes | yes | yes | yes |
| stageFocusRect | yes | ignored | ignored | ignored |
| scaleMode | yes | no | no | partial |
| stageHeight | yes | yes | yes | yes |
| stageWidth | yes | yes | yes | yes |

### Stage3D

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| context3D | yes | yes | yes | yes |
| visible | yes | yes | yes | yes |
| x | yes | yes | yes | yes |
| y | yes | yes | yes | yes |

### Tilesheet

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| addTileRect | yes | yes | yes | yes |
| drawTiles | yes | yes | yes | yes |

## openfl.errors

### ArgumentError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### EOFError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### Error

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| errorID | yes | yes | yes | yes |
| message | yes | yes | yes | yes |
| name | yes | yes | yes | yes |
| getStackTrace | yes | yes | yes | yes |

### IllegalOperationError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### IOError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### RangeError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### SecurityError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### TypeError

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

## openfl.events

### AccelerometerEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| accelerationX | yes | planned | planned | yes |
| accelerationY | yes | planned | planned | yes |
| accelerationZ | yes | planned | planned | yes |
| timestamp | yes | planned | planned | yes |

### AsyncErrorEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| error | yes | yes | yes | yes |

### ContextMenuEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| contextMenuOwner | yes | ignored | ignored | ignored |
| mouseTarget | yes | ignored | ignored | ignored |

### DataEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| data | yes | yes | yes | yes |

### ErrorEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| errorID | yes | yes | yes | yes |

### Event

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bubbles | yes | yes | yes | yes |
| cancelable | yes | yes | yes | yes |
| currentTarget | yes | yes | yes | yes |
| eventPhase | yes | yes | yes | yes |
| target | yes | yes | yes | yes |
| type | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |
| isDefaultPrevented | yes | yes | yes | yes |
| preventDefault | yes | yes | yes | yes |
| stopImmediatePropagation | yes | yes | yes | yes |
| stopPropagation | yes | yes | yes | yes |

### EventDispatcher

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| addEventListener | yes | yes | yes | yes |
| dispatchEvent | yes | yes | yes | yes |
| hasEventListener | yes | yes | yes | yes |
| removeEventListener | yes | yes | yes | yes |
| willTrigger | yes | yes | yes | yes |

### FocusEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| keyCode | yes | yes | yes | yes |
| relatedObject | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |

### GameInputEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| device | yes | planned | yes | no |

### HTTPStatusEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| responseHeaders | yes | yes | yes | yes |
| responseURL | yes | yes | yes | yes |
| status | yes | yes | yes | yes |

### IOErrorEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### KeyboardEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| altKey | yes | yes | yes | yes |
| charCode | yes | yes | yes | yes |
| ctrlKey | yes | yes | yes | yes |
| commandKey | yes | yes | yes | yes |
| controlKey | yes | yes | yes | yes |
| keyCode | yes | yes | yes | yes |
| keyLocation | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |

### MouseEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| info | yes | yes | yes | yes |

### ProgressEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bytesLoaded | yes | yes | yes | yes |
| bytesTotal | yes | yes | yes | yes |

### SampleDataEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| data | yes | planned | planned | yes |
| position | yes | planned | planned | yes |

### SecurityErrorEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### TextEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| text | yes | yes | yes | yes |

### TimerEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

### TouchEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| altKey | yes | yes | yes | yes |
| buttonDown | yes | yes | yes | yes |
| commandKey | yes | yes | yes | yes |
| ctrlKey | yes | yes | yes | yes |
| delta | yes | yes | yes | yes |
| isPrimaryTouchPoint | yes | yes | yes | yes |
| localX | yes | yes | yes | yes |
| localY | yes | yes | yes | yes |
| pressure | yes | yes | yes | ignored |
| relatedObject | yes | yes | yes | yes |
| shiftKey | yes | yes | yes | yes |
| sizeX | yes | ignored | ignored | ignored |
| sizeY | yes | ignored | ignored | ignored |
| stageX | yes | yes | yes | yes |
| stageY | yes | yes | yes | yes |
| touchPointID | yes | yes | yes | yes |

### UncaughtErrorEvent

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| error | yes | yes | yes | yes |

### UncaughtErrorEvents

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| (available) | yes | yes | yes | yes |

## openfl.external

### ExternalInterface

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| available | yes | yes | ignored | ignored |
| marshallExceptions | yes | ignored | ignored | ignored |
| objectID | yes | ignored | ignored | ignored |

## openfl.filters

### BitmapFilter

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| clone | yes | yes | yes | yes |

### BlurFilter

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| blurX | yes | planned | planned | yes |
| blurY | yes | planned | planned | yes |
| quality | yes | planned | planned | yes |

### ColorMatrixFilter

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| matrix | yes | yes | planned | yes |

### DropShadowFilter

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| alpha | yes | planned | planned | yes |
| angle | yes | planned | planned | yes |
| blurX | yes | planned | planned | yes |
| blurY | yes | planned | planned | yes |
| color | yes | planned | planned | yes |
| distance | yes | planned | planned | yes |
| hideObject | yes | planned | planned | yes |
| inner | yes | planned | planned | yes |
| knockout | yes | planned | planned | yes |
| quality | yes | planned | planned | yes |
| strength | yes | planned | planned | yes |

### GlowFilter

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| alpha | yes | planned | planned | yes |
| blurX | yes | planned | planned | yes |
| blurY | yes | planned | planned | yes |
| color | yes | planned | planned | yes |
| inner | yes | planned | planned | yes |
| knockout | yes | planned | planned | yes |
| quality | yes | planned | planned | yes |
| strength | yes | planned | planned | yes |

## openfl.geom

### ColorTransform

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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
| deltaTransformPoint | yes | yes | yes | yes |
| equals | yes | yes | yes | yes |
| identity | yes | yes | yes | yes |
| invert | yes | yes | yes | yes |
| rotate | yes | yes | yes | yes |
| scale | yes | yes | yes | yes |
| setRotation | yes | yes | yes | yes |
| setTo | yes | yes | yes | yes |
| transformPoint | yes | yes | yes | yes |
| translate | yes | yes | yes | yes |

### Matrix3D

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| fieldOfView | yes | yes | yes | yes |
| focalLength | yes | yes | yes | yes |
| projectionCenter | yes | yes | yes | yes |
| toMatrix3D | yes | yes | yes | yes |

### Point

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| colorTransform | yes | partial | yes | yes |
| concatenatedColorTransform | partial | yes | yes | yes |
| concatenatedMatrix | yes | partial | partial | yes |
| matrix | yes | partial | partial | yes |
| pixelBounds | yes | ignored | ignored | ignored |

### Utils3D

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| projectVector | yes | yes | yes | yes |

### Vector3D

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| album | yes | ignored | ignored | ignored |
| artist | yes | ignored | ignored | ignored |
| comment | yes | ignored | ignored | ignored |
| genre | yes | ignored | ignored | ignored |
| songName | yes | ignored | ignored | ignored |
| track | yes | ignored | ignored | ignored |
| year | yes | ignored | ignored | ignored |

### Sound

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bytesLoaded | yes | yes | yes | yes |
| bytesTotal | yes | yes | yes | yes |
| id3 | yes | ignored | ignored | ignored |
| isBuffering | yes | ignored | ignored | ignored |
| length | yes | yes | yes | yes |
| url | yes | yes | yes | yes |
| close | yes | yes | yes | yes |
| load | yes | yes | yes | partial |
| loadCompressedDataFromByteArray | yes | no | partial | partial |
| loadPCMFromByteArray | yes | no | partial | partial |
| play | yes | yes | yes | yes |

### SoundChannel

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| leftPeak | yes | ignored | ignored | ignored |
| position | yes | yes | yes | yes |
| rightPeak | yes | ignored | ignored | ignored |
| soundTransform | yes | yes | yes | yes |
| stop | yes | yes | yes | yes |

### SoundLoaderContext

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bufferTime | yes | ignored | ignored | ignored |
| checkPolicyFile | yes | ignored | ignored | ignored |

### SoundTransform

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| leftToLeft | yes | yes | yes | yes |
| leftToRight | yes | yes | yes | yes |
| pan | yes | yes | yes | yes |
| rightToLeft | yes | yes | yes | yes |
| rightToRight | yes | yes | yes | yes |
| volume | yes | yes | yes | yes |
| clone | yes | yes | yes | yes |

### Video

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| deblocking | yes | ignored | ignored | ignored |
| smoothing | yes | ignored | ignored | ignored |
| attachNetStream | yes | yes | no | no |
| clear | yes | ignored | ignored | ignored |

## openfl.net

### NetConnection

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| connect | yes | yes | ignored | ignored |

### NetStream

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| data | yes | yes | yes | yes |
| size | yes | yes | yes | yes |
| clear | yes | yes | yes | yes |
| flush | yes | yes | yes | yes |
| getLocal | yes | yes | yes | yes |
| setProperty | yes | yes | yes | yes |

### Socket

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| bytesLoaded | yes | yes | yes | yes |
| bytesTotal | yes | yes | yes | yes |
| data | yes | yes | yes | yes |
| dataFormat | yes | yes | yes | yes |
| close | yes | ignored | ignored | ignored |
| load | yes | yes | yes | yes |

### URLRequest

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| contentType | yes | yes | yes | yes |
| data | yes | yes | yes | yes |
| method | yes | yes | yes | yes |
| requestHeaders | yes | yes | yes | yes |
| url | yes | yes | yes | yes |
| userAgent | yes | no | partial | partial |
| formatRequestHeaders | yes | yes | yes | yes |

### URLRequestHeader

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| name | yes | yes | yes | yes |
| value | yes | yes | yes | yes |

### URLVariables

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| decode | yes | yes | yes | yes |

### XMLSocket

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| connected | yes | yes | yes | yes |
| timeout | yes | ignored | ignored | ignored |
| close | yes | yes | yes | yes |
| connect | yes | yes | yes | yes |
| connectWithProto | yes | partial | ignored | ignored |
| send | yes | yes | yes | yes |

## openfl.profiler

### Telemetry

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| connected | yes | yes | yes | yes |
| spanMarker | yes | ignored | ignored | ignored |
| registerCommandHandler | yes | ignored | ignored | ignored |
| sendMetric | yes | ignored | ignored | ignored |
| sendSpanMetric | yes | ignored | ignored | ignored |
| unregisterCommandHandler | yes | ignored | ignored | ignored |

## openfl.sensors

### Accelerometer

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| isSupported | yes | planned | planned | yes |
| muted | yes | planned | planned | yes |
| setRequestedUpdateInterval | yes | planned | planned | yes |

## openfl.system

### ApplicationDomain

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| currentDomain | yes | partial | partial | ignored |
| parentDomain | yes | partial | partial | ignored |
| getDefinition | yes | partial | partial | ignored |
| hasDefinition | yes | partial | partial | ignored |

### Capabilities

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| avHardwareDisabled | yes | yes | yes | no |
| cpuArchitecture | yes | yes | yes | no |
| hasAccessibility | yes | ignored | ignored | ignored |
| hasAudio | yes | yes | yes | no |
| hasAudioEncoder | yes | yes | yes | no |
| hasEmbeddedVideo | yes | yes | yes | no |
| hasMP3 | yes | yes | yes | no |
| hasPrinting | yes | yes | yes | no |
| hasScreenBroadcast | yes | yes | yes | no |
| hasScreenPlayback | yes | yes | yes | no |
| hasStreamingAudio | yes | yes | yes | no |
| hasTLS | yes | yes | yes | no |
| hasVideoEncoder | yes | yes | yes | no |
| isDebugger | yes | yes | yes | no |
| isEmbeddedInAcrobat | yes | yes | yes | no |
| language | yes | yes | yes | no |
| localFileReadDisable | yes | yes | yes | no |
| manufacturer | yes | yes | yes | no |
| maxLevelIDC | yes | yes | yes | no |
| os | yes | yes | yes | no |
| pixelAspectRatio | yes | yes | yes | yes |
| playerType | yes | yes | yes | no |
| screenColor | yes | yes | yes | no |
| screenDPI | yes | yes | yes | yes |
| screenResolutionX | yes | yes | yes | yes |
| screenResolutionY | yes | yes | yes | yes |
| serverString | yes | yes | yes | no |
| supports32BitProcesses | yes | yes | yes | no |
| supports64BitProcesses | yes | yes | yes | no |
| touchscreenType | yes | yes | yes | no |
| version | yes | yes | yes | no |
| hasMultiChannelAudio | yes | yes | yes | no |

### LoaderContext

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| allowCodeImport | yes | ignored | ignored | ignored |
| allowLoadBytesCodeExecution | yes | ignored | ignored | ignored |
| applicationDomain | yes | ignored | ignored | ignored |
| checkPolicyFile | yes | ignored | ignored | ignored |
| securityDomain | yes | ignored | ignored | ignored |

### Security

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| disableAVM1Loading | yes | ignored | ignored | ignored |
| exactSettings | yes | ignored | ignored | ignored |
| sandboxType | yes | ignored | ignored | ignored |
| allowDomain | yes | ignored | ignored | ignored |
| allowInsecureDomain | yes | ignored | ignored | ignored |
| loadPolicyFile | yes | ignored | ignored | ignored |

### SecurityDomain

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| currentDomain | yes | ignored | ignored | ignored |

### System

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| totalMemory | yes | yes | yes | yes |
| useCodePage | yes | ignored | ignored | no |
| vmVersion | yes | ignored | ignored | no |
| exit | no | ignored | yes | yes |
| gc | no | ignored | yes | yes |
| pause | no | no | no | no |
| resume | no | no | no | yes |
| setClipboard | yes | yes | yes | no |

## openfl.text

### Font

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| fontName | yes | yes | yes | yes |
| fontStyle | yes | ignored | ignored | ignored |
| fontType | yes | ignored | ignored | ignored |
| enumerateFonts | yes | partial | partial | partial |
| registerFont | yes | yes | yes | yes |

### TextField

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| antiAliasType | yes | partial | partial | ignored |
| autoSize | yes | yes | yes | partial |
| background | yes | yes | yes | yes |
| backgroundColor | yes | yes | yes | yes |
| border | yes | yes | yes | yes |
| borderColor | yes | yes | yes | yes |
| bottomScrollV | yes | yes | yes | ignored |
| caretIndex | yes | yes | yes | ignored |
| defaultTextFormat | yes | yes | yes | yes |
| displayAsPassword | yes | planned | planned | yes |
| embedFonts | yes | ignored | ignored | ignored |
| gridFitType | yes | partial | partial | ignored |
| htmlText | yes | partial | partial | partial |
| length | yes | yes | yes | yes |
| maxChars | yes | planned | planned | ignored |
| maxScrollH | yes | yes | yes | ignored |
| maxScrollV | yes | yes | yes | ignored |
| multiline | yes | yes | yes | yes |
| numLines | yes | yes | yes | yes |
| restrict | yes | planned | planned | ignored |
| scrollH | yes | yes | yes | ignored |
| scrollV | yes | yes | yes | ignored |
| selectable | yes | yes | yes | yes |
| selectionBeginIndex | yes | yes | yes | ignored |
| selectionEndIndex | yes | yes | yes | ignored |
| sharpness | yes | ignored | ignored | ignored |
| text | yes | yes | yes | yes |
| textColor | yes | yes | yes | yes |
| textHeight | yes | yes | yes | yes |
| textWidth | yes | yes | yes | yes |
| type | yes | yes | yes | yes |
| wordWrap | yes | yes | yes | yes |
| appendText | yes | yes | yes | yes |
| getCharBoundaries | yes | yes | yes | ignored |
| getCharIndexAtPoint | yes | yes | yes | ignored |
| getFirstCharInParagraph | yes | yes | yes | ignored |
| getLineIndexAtPoint | yes | yes | yes | ignored |
| getLineIndexOfChar | yes | yes | yes | ignored |
| getLineLength | yes | yes | yes | ignored |
| getLineMetrics | yes | yes | yes | ignored |
| getLineOffset | yes | yes | yes | ignored |
| getLineText | yes | yes | yes | ignored |
| getParagraphLength | yes | yes | yes | ignored |
| getTextFormat | yes | partial | partial | partial |
| replaceSelectedText | yes | yes | yes | ignored |
| replaceText | yes | yes | yes | ignored |
| setSelection | yes | yes | yes | ignored |
| setTextFormat | yes | yes | yes | yes |

### TextFormat

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| ascent | yes | yes | yes | yes |
| descent | yes | yes | yes | yes |
| height | yes | yes | yes | yes |
| leading | yes | yes | yes | yes |
| width | yes | yes | yes | yes |
| x | yes | yes | yes | yes |

## openfl.ui

### GameInput

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| isSupported | yes | planned | yes | no |
| numDevices | yes | planned | yes | no |
| getDeviceAt | yes | planned | yes | no |

### GameInputControl

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| device | yes | planned | yes | no |
| id | yes | planned | yes | no |
| maxValue | yes | planned | yes | no |
| minValue | yes | planned | yes | no |
| value | yes | planned | yes | no |

### GameInputDevice

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| enabled | yes | planned | yes | no |
| id | yes | planned | yes | no |
| name | yes | planned | yes | no |
| numControls | yes | planned | yes | no |
| sampleInterval | yes | ignored | ignored | no |
| getCachedSamples | yes | ignored | ignored | no |
| getControlAt | yes | planned | yes | no |
| startCachingSamples | yes | ignored | ignored | no |
| stopCachingSamples | yes | ignored | ignored | no |

### Keyboard

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| capsLock | yes | yes | yes | yes |
| numLock | yes | yes | yes | yes |
| isAccessible | yes | ignored | ignored | ignored |

### Mouse

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| hide | yes | yes | yes | yes |
| show | yes | yes | yes | yes |

### Multitouch

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| inputMode | yes | partial | partial | partial |
| maxTouchPoints | yes | ignored | ignored | ignored |
| supportedGestures | yes | yes | yes | ignored |
| supportsGestureEvents | yes | yes | yes | ignored |
| supportsTouchEvents | yes | yes | yes | yes |

## openfl.utils

### ByteArray

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| currentCount | yes | yes | yes | yes |
| delay | yes | yes | yes | yes |
| repeatCount | yes | yes | yes | yes |
| running | yes | yes | yes | yes |
| reset | yes | yes | yes | yes |
| start | yes | yes | yes | yes |
| stop | yes | yes | yes | yes |

## openfl

### Assets

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

### Lib

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| application | yes | yes | yes | no |
| current | yes | yes | yes | yes |
| embed | no | yes | no | no |
| getTimer | yes | yes | yes | yes |
| getURL | yes | yes | planned | yes |
| notImplemented | yes | yes | yes | yes |
| trace | yes | yes | yes | yes |

### Memory

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
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

| Feature | Flash | HTML5 | Native | Native (Legacy) |
| ------- |:-----:|:-----:|:------:|:---------------:|
| fixed | yes | yes | yes | yes |
| length | yes | yes | yes | yes |
| concat | yes | yes | yes | yes |
| copy | yes | yes | yes | yes |
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

_** When including the "format" haxelib library_