# Coda
Coda(color dancer) is a pure javascript object for changing background color or color of a DOM element in period of time and many other options.
`Coda : The last piece of a song.`

## How to use?
```javascript
coda(DOMelement, options).dance();
```

## Example
```html
<div class="dancer">
  dancing with coda....
</div>
```
```javascript 
var options = {
  all : { duration: 1000, timeStep: 20 },
  red : false,
  green:  { timeStep: 123},
  blue:{ duration: 500 }
}

coda('#dancer', options).dance();
```
## Options
`hasRed`: (default `true`) defines to use red color in dancing.
`redOpt: (type: object `{}` ) defines red color options.
`hasGreen`: (default `true`) defines to use blue green in dancing.
`greenOpt: (type: object `{}` ) defines red color options.
`hasBlue`: (default `true`) defines to use blue color in dancing.
`blueOpt: (type: object `{}` ) defines red color options.

## Methods
```javascript
dance()
```
dancing with the defined options 
```javascript
stop([red[,green][,blue]])
```
