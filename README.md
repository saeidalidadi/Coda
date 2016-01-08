# Coda
Coda(color dancer) is a pure javascript object for changing background color or color of a DOM element in period of time and many other options.
`Coda : The last piece of a song.`

## How to use?
```javascript
coda(DOMelement).dance(options);
```

## Example
```html
<div class="dancer">
  dancing with coda....
</div>
```
```javascript 
var options = {
  duration : 1000,
  green : false,
  redDur: 500
}

coda('.dancer').dance(options);
```
## Options
`red`: (default `true`) detemines to use red color in dancing.

`green`: (default `true`) detemines to use blue green in dancing.

`blue`: (default `true`) determines to use blue color in dancing.

## Methods
```javascript
dance([options])
```
dancing with the defined options 
```javascript
stop([red[,green][,blue]])
```
