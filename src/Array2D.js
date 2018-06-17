module.exports = class Array2D {
  /**
   * constructor - intitialize Array2D class.
   *
   * @param {number} width  number corresponding with the width(column count) of the 2d array.
   * @param {number} height number corresponding with the height(row count) of the 2d array.
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
   * getColumn - Return the column of the given position.
   *
   * @param {number} position Position for the column.
   * @return {array} Returns the column.
   */
  getColumn (position) {
    return this.array2D[position]
  }

  /**
   * addColumn - Add the column at the given position.
   *
   * @param {number} position Position for the column.
   */
  addColumn (position) {
    this.array2D.splice(position, 0, Array(this.height))
  }

  /**
   * removeColumn - Remove the column at the given position.
   *
   * @param {number} position Position for the column.
   */
  removeColumn (position) {
    this.array2D.splice(position, 1)
  }

  /**
   * fillColumn - Executes the provided function once for each array element for column at given position.
   *
   * @param {number} position Position for the column.
   * @param {function} f Fill function for the column.
   */
  fillColumn (position, f) {
    // TODO: find out why you can't use forEach() on an array that contains empty arrays, use es3 style for now.
    for (let i = 0; i < this.height; i++) {
      this.fillPosition(position, i, f(position, i))
    }
  }

  /**
   * clearColumn - Clear the column at the given position.
   *
   * @param {number} position Position for the column.
   */
  clearColumn (position) {
    const column = this.getColumn(position)
    column.forEach((item, index) => this.clearPosition(position, index))
  }

  /**
   * getRow - Return the row of the given position.
   *
   * @param {number} position Position for the row.
   * @return {array} Returns the row.
   */
  getRow (position) {
    return this.array2D.map(column => column[position])
  }

  /**
   * addRow - Add the row at the given position.
   *
   * @param {number} position Position for the row.
   */
  addRow (position) {
    this.array2D.forEach(column => column.splice(position, 0, undefined))
  }

  /**
   * removeRow - Remove the row at the given position.
   *
   * @param {number} position Position for the row.
   */
  removeRow (position) {
    this.array2D.forEach(column => column.splice(position, 1))
  }

  /**
   * fillRow - Executes the provided function once for each array element for row at given position.
   *
   * @param {number} position Position for the row.
   * @param {function} f Fill function for the row.
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
   * getPosition - Return the item of the given position.
   *
   * @param {number} x x(column) position for in the 2d array
   * @param {number} y y(row) position for in the 2d array
   * @return {any} returns the item
   */
  getPosition (x, y) {
    return this.array2D[x][y]
  }

  /**
   * fillPosition - Fill position with item
   *
   * @param {number} x x(column) position for in the 2d array
   * @param {number} y y(row) position for in the 2d array
   * @param {any} item item for in the 2d array
   */
  fillPosition (x, y, item) {
    this.array2D[x][y] = item
  }

  /**
   * clearPosition - Clear given position
   *
   * @param {type} x x(column) position for in the 2d array
   * @param {type} y y y(row) position for in the 2d array
   */
  clearPosition (x, y) {
    this.array2D[x][y] = undefined
  }

  /**
   * findPosition - Find the postion for given item
   *
   * @param  {any} item item fot wich to find position
   * @return {any} return position for item
   */
  findPosition (item) {
    let position
    this.forEach((currentItem, { x, y }) => {
      if (Object.is(currentItem, item)) {
        position = { x, y }
      }
    })
    return position
  }

  /**
   * forEach - Executes a provided function once for each 2d array element.
   */
  forEach (f) {
    // TODO: find out why you can't use forEach() on an array that contains empty arrays, use es3 style for now.
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        f(this.getPosition(x, y), { x, y })
      }
    }
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
    return this.array2D.length
  }

  /**
   * get height - return the height(row count) of the 2d array
   *
   * @return {number} return the height of the 2d array
   */
  get height () {
    return this.array2D[0].length
  }
}
