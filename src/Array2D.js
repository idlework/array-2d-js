export default class Array2D {
  /**
   * constructor - intitialize Array2D class.
   *
   * @param  {number} width  number corresponding with the width(column count) of the 2d array.
   * @param  {number} height number corresponding with the height(row count) of the 2d array.
   */
  constructor (width, height) {
    this._width = width
    this._height = height
    this._array2D = this._createEmptyArray(width, height)
  }

  _createEmptyArray (width, height) {
    return [...Array(width)].map(_ => Array(height))
  }

  /**
   * getRow - Return the row of the given position.
   *
   * @param  {number} position Position for the row.
   * @return {array} Returns the row.
   */
  getRow (position) {
    return this._array2D.map(column => column[position])
  }

  /**
   * addRow - Add the row at the given position.
   *
   * @param  {number} position Position for the row.
   */
  addRow (position) {
    this._array2D.forEach(column => column.splice(position, 1, undefined))
  }

  /**
   * removeRow - Remove the row at the given position.
   *
   * @param  {number} position Position for the row.
   */
  removeRow (position) {
    this._array2D.forEach(column => column.slice(position, 1))
  }

  /**
   * fillRow - Executes the provided function once for each array element for row at given position.
   *
   * @param  {number} position Position for the row.
   * @param  {function} f Fill function for the row.
   */
  fillRow (position, f) {
    const row = this.getRow(position)
    row.forEach((item, index) => this.fillPosition(index, position, f(index, position)))
  }

  /**
   * clearRow - Clear the row at the given position.
   *
   * @param  {number} position Position for the row.
   */
  clearRow (position) {
    const row = this.getRow(position)
    row.forEach((item, index) => this.clearPosition(index, position))
  }

  /**
   * getColumn - Return the column of the given position.
   *
   * @param  {number} position Position for the column.
   * @return {array} Returns the column.
   */
  getColumn (position) {
    return this._array2D[position]
  }

  /**
   * addColumn - Add the column at the given position.
   *
   * @param  {number} position Position for the column.
   */
  addColumn (position) {
    this._array2D.splice(position, 1, Array(this.height))
  }

  /**
   * removeColumn - Remove the column at the given position.
   *
   * @param  {number} position Position for the column.
   */
  removeColumn (position) {
    this._array2D.slice(position, 1)
  }

  /**
   * fillColumn - Executes the provided function once for each array element for column at given position.
   *
   * @param  {number} position Position for the column.
   * @param  {function} f Fill function for the column.
   */
  fillColumn (position, f) {
    const column = this.getColumn(position)
    column.forEach((item, index) => this.fillPosition(position, index, f(position, index)))
  }

  /**
   * clearColumn - Clear the column at the given position.
   *
   * @param  {number} position Position for the column.
   */
  clearColumn (position) {
    const column = this.getColumn(position)
    column.forEach((item, index) => this.clearPosition(position, index))
  }

  /**
   * getPosition - Return the item of the given position.
   *
   * @param  {number} x x(column) position for in the 2d array
   * @param  {number} y y(row) position for in the 2d array
   * @return {any} returns the item
   */
  getPosition (x, y) {
    return this._array2D[x][y]
  }

  /**
   * fillPosition - Fill position with item
   *
   * @param  {number} x x(column) position for in the 2d array
   * @param  {number} y y(row) position for in the 2d array
   * @param  {any} item item for in the 2d array
   */
  fillPosition (x, y, item) {
    this._array2D[x][y] = item
  }

  /**
   *
   * @param  {type} x x(column) position for in the 2d array
   * @param  {type} y y y(row) position for in the 2d array
   */
  clearPosition (x, y) {
    this._array2D[x][y] = undefined
  }

  /**
   * forEach - Executes a provided function once for each 2d array element.
   */
  forEach (f) {
    this.map.forEach((column, x) => column.forEach((item, y) => f(item, { x, y })))
  }

  /**
   * get array2D - Returns the 2d array
   *
   * @return {Array2D}  Returns the 2d array
   */
  get array2D () {
    return this._array2D
  }

  /**
   * get width - return the width(column count) of the 2d array
   *
   * @return {number} return the width of the 2d array
   */
  get width () {
    return this.array2d.length
  }

  /**
   * get height - return the height(row count) of the 2d array
   *
   * @return {number} return the height of the 2d array
   */
  get height () {
    return this.array2d[0].length
  }
}