# Matches Selector Polyfill

Provides a polyfill for the `matches` function on the `Element` class on the DOM.

Also has a module version available if desired. 

## Usage

Simply add the `matches-selector-polyfill.js` file from the dist folder before other scripts.

```
<script src="matches-selector-polyfill.js"></script>
```

## Modules

If you prefer to not patch the `Element` object, but still want to use the matches function as a module, use the file `matches-selector.js` instead of the polyfill file. 

It supports both CommonJS and AMD patterns and will not polyfill the `Element` object.

## Build

If you want to edit the source files you can build your own distribution copy by running the following. At the command prompt install packages (if not done already) and then run the build script.

```
npm i
npm run build
```

## Test

To test at the command prompt install packages (if not done already) and then run the test script which will load the browser.

```
npm i
npm test
```