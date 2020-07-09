[![npm version](https://badge.fury.io/js/%40justinribeiro%2Fhtml5-dragdroptouch-shim.svg)](https://badge.fury.io/js/%40justinribeiro%2Fhtml5-dragdroptouch-shim)

# HTML5 DragDropTouch Shim

> An opinionated shim that polyfills HTML5 drag and drop support on mobile devices with Event.ComposedPath() support

## TLDR;

Where I wander through the demos in this repo and talk about a little about the inner workings: https://www.youtube.com/watch?v=MUF6R-tk_vY

## Key Differences From Other Polyfills

While this is in large part an ES Modules refactor of Bernado's [dragdroptouch](https://github.com/Bernardo-Castilho/dragdroptouch) polyfill (which deserves the bulk of the love by the way), this version differs in two keys areas:

1. Re: finding the draggable. Uses [event.composedPath()](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath) to allow use to hunt for draggables within open ShadowRoots

2. Re: finding the dropzone. Uses [event.composedPath()](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath) to find the target shadowRoot, then uses [DocumentOrShadowRoot.elementFromPoint](https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint) to locate our dropzone target.

This allows it to be more readily be used with ShadowDOM and web components, which is my primary use case for it to be honest.

## Usage

Install via yarn or npm:

```
yarn add @justinribeiro/html5-dragdroptouch-shim
```

Only load the module if device has touch support.

```
if ('ontouchstart' in document) {
  import('@justinribeiro/html5-dragdroptouch-shim/dist/esm.js').then(module => {
    const shim = new module.default();
  });
  status.textContent = 'TOUCH DETECTED: DragDropTouch shim loaded!';
} else {
  status.textContent = 'NATIVE DRAGDROP DETECTED: no shim loaded.';
}
```

## Additional Configuration

The class constructor can take an array of options if you want more control over the various triggers and delays within the shim:

```
import { default as DdtShim } from '@justinribeiro/html5-dragdroptouch-shim';

const opts = {
  threshold = 5,
  opacity = 0.8,
  dblClick = 500,
  ctxMenu = 900,
  isPressHoldMode = 400,
  pressHoldAwait = 400,
  pressHoldMargin = 25,
  pressHoldThreshold = 0
}
const startUpTheShim = new DdtShim(opts);
```

## Examples

> You can run the examples via the [demo site](https://justinribeiro.github.io/html5-dragdroptouch-shim/demo/index.html).

There are a host of examples within the demo holder, including a set of example web components that support drag and drop and the shim. To run locally:

```
yarn dev
```
