# Array2D
Array2D is an auxiliary tool to create, manage and manipulate 2d arrays. I made this component to help me develop board game prototypes. If you want to use this component, please! If you want to modify or expand this component, you are welcome to do so. See notes in contribution.

## Installation
```shell
$ npm i Array2D --save
```

## Usage
```javascript
import Array2D from 'array-2d-js'

export default class Map extends Array2D {
  constructor (width, height) {
    super(width, height)
  }
}
```

*or*

```javascript
import Array2D from 'array-2d-js'

const array2D = new Array2D(10, 10)
```

*or*

```javascript
const Array2D = require("array-2d-js")

const array2D = new Array2D(10, 10)
```

## API

### constructor

Intitialize Array2D class.

#### Parameters

-   `width` **[Number][1]** Number corresponding with the width(column count) of the 2d array.
-   `height` **[Number][1]** Number corresponding with the height(row count) of the 2d array.

### getColumn

Return the column of the given position.

#### Parameters

-   `position` **[Number][1]** Position for the column.

Returns **[Array][2]** Returns the column.

### addColumn

Add the column at the given position.

#### Parameters

-   `position` **[Number][1]** Position for the column.

### removeColumn

Remove the column at the given position.

#### Parameters

-   `position` **[Number][1]** Position for the column.

### fillColumn

Executes the provided function once for each array element for column at given position.

#### Parameters

-   `position` **[Number][1]** Position for the column.
-   `f` **[function][3]** Fill function for the column.

### clearColumn

Clear the column at the given position.

#### Parameters

-   `position` **[Number][1]** Position for the column.

## condenseColumns

Condense the 2d array to the minimum by removing all the empty columns on the outside. This process is irreversible.

### getRow

Get the row of the given position.

#### Parameters

-   `position` **[Number][1]** Position for the row.

Returns **[Array][2]** Returns the row.

### addRow

Add the row at the given position.

#### Parameters

-   `position` **[Number][1]** Position for the row.

### removeRow

Remove the row at the given position.

#### Parameters

-   `position` **[Number][1]** Position for the row.

### fillRow

Executes the provided function once for each array element for row at given position.

#### Parameters

-   `position` **[Number][1]** Position for the row.
-   `f` **[function][3]** Fill function for the row.

### clearRow

Clear the row at the given position.

#### Parameters

-   `position` **[Number][1]** Position for the row.

## condenseRows

Condense the 2d array to the minimum by removing all the empty rows on the outside. This process is irreversible.

### getPosition

Get the item of the given position.

#### Parameters

-   `x` **[Number][1]** Column position for in the 2d array.
-   `y` **[Number][1]** Row position for in the 2d array.

Returns **any** Returns the item.

### fillPosition

Fill position with item

#### Parameters

-   `x` **[Number][1]** Column position for in the 2d array.
-   `y` **[Number][1]** Row position for in the 2d array.
-   `item` **any** Item for in the 2d array.

### clearPosition

Clear given position

#### Parameters

-   `x` **[Number][1]** Column position for in the 2d array.
-   `y` **[Number][1]** Row position for in the 2d array.

### findPosition

Find the postion for given item

#### Parameters

-   `item` **any** Item for which you want to find the position.

Returns **any** Item position.

### forEach

Executes a provided function once for each 2d array element.

#### Parameters

-   `f` **[function][3]** Fill function for the 2d array.

## condense

Condense the 2d array to the minimum by removing all the empty rows and columns on the outside. This process is irreversible.

### array2D

Returns the 2d array.

Returns **Array2D** Returns the 2d array.

### width

return the width(column count) of the 2d array.

Returns **[Number][1]** Returns the width of the 2d array.

### height

return the height(row count) of the 2d array.

Returns **[Number][1]** Returns the height of the 2d array.

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

## Contributing
Issues are welcome. The best way to report a problem is to reproduce it with a code example.

Pull requests are welcome. If you want to change the API, it's better to discuss it using an issue ticket.

## License

Array2D is [MIT licensed](./LICENSE).