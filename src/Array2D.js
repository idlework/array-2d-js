module.exports = class Array2D {
  /**
   * Intitialize Array2D class.
   *
   * @param {Number} width - Number corresponding with the width(column count) of the 2d array.
   * @param {Number} height - Number corresponding with the height(row count) of the 2d array.
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
   * Return the column of the given position.
   *
   * @param {Number} position - Position for the column.
   * @return {Array} - Returns the column.
   */
  getColumn (position) {
    return this.array2D[position]
  }

  /**
   * Add the column at the given position.
   *
   * @param {Number} position - Position for the column.
   */
  addColumn (position) {
    this.array2D.splice(position, 0, Array(this.height))
  }

  /**
   * Remove the column at the given position.
   *
   * @param {Number} position - Position for the column.
   */
  removeColumn (position) {
    this.array2D.splice(position, 1)
  }

  /**
   * Executes the provided function once for each array element for column at given position.
   *
   * @param {Number} position - Position for the column.
   * @param {function} f - Fill function for the column.
   */
  fillColumn (position, f) {
    // TODO: find out why you can't use forEach() on an array that contains empty arrays, use es3 style for now.
    for (let i = 0; i < this.height; i++) {
      this.fillPosition(position, i, f(position, i))
    }
  }

  /**
   * Clear the column at the given position.
   *
   * @param {Number} position - Position for the column.
   */
  clearColumn (position) {
    const column = this.getColumn(position)
    column.forEach((item, index) => this.clearPosition(position, index))
  }

  /**
   * Condense the 2d array to the minimum by removing all the empty columns on the outside. This process is irreversible.
   */
  condenseColumns () {
    let index = 0
    let isRemoving = true
    while (isRemoving) {
      const column = this.getColumn(index)

      const isEmpty = column.every(item => item === undefined)
      isEmpty && this.removeColumn(index)

      !isEmpty && index++
      index >= this.width && (isRemoving = false)
    }
  }

  /**
   * Get the row of the given position.
   *
   * @param {Number} position - Position for the row.
   * @return {Array} - Returns the row.
   */
  getRow (position) {
    return this.array2D.map(column => column[position])
  }

  /**
   * Add the row at the given position.
   *
   * @param {Number} position - Position for the row.
   */
  addRow (position) {
    this.array2D.forEach(column => column.splice(position, 0, undefined))
  }

  /**
   * Remove the row at the given position.
   *
   * @param {Number} position - Position for the row.
   */
  removeRow (position) {
    this.array2D.forEach(column => column.splice(position, 1))
  }

  /**
   * Executes the provided function once for each array element for row at given position.
   *
   * @param {Number} position - Position for the row.
   * @param {function} f - Fill function for the row.
   */
  fillRow (position, f) {
    const row = this.getRow(position)
    row.forEach((item, index) => this.fillPosition(index, position, f(index, position)))
  }

  /**
   * Clear the row at the given position.
   *
   * @param {Number} position - Position for the row.
   */
  clearRow (position) {
    const row = this.getRow(position)
    row.forEach((item, index) => this.clearPosition(index, position))
  }

  /**
   * Condense the 2d array to the minimum by removing all the empty rows on the outside. This process is irreversible.
   */
  condenseRows () {
    let index = 0
    let isRemoving = true
    while (isRemoving) {
      const row = this.getRow(index)

      const isEmpty = row.every(item => item === undefined)
      isEmpty && this.removeRow(index)

      !isEmpty && index++
      index >= this.height && (isRemoving = false)
    }
  }

  /**
   * Get the item of the given position.
   *
   * @param {Number} x - Column position for in the 2d array.
   * @param {Number} y - Row position for in the 2d array.
   * @return {any} - Returns the item.
   */
  getPosition (x, y) {
    return this.array2D[x][y]
  }

  /**
   * Fill position with item
   *
   * @param {Number} x - Column position for in the 2d array.
   * @param {Number} y - Row position for in the 2d array.
   * @param {any} item - Item for in the 2d array.
   */
  fillPosition (x, y, item) {
    this.array2D[x][y] = item
  }

  /**
   * Clear given position
   *
   * @param {Number} x - Column position for in the 2d array.
   * @param {Number} y - Row position for in the 2d array.
   */
  clearPosition (x, y) {
    this.array2D[x][y] = undefined
  }

  /**
   * Find the postion for given item
   *
   * @param {any} item - Item for which you want to find the position.
   * @return {any} - Item position.
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
   * Executes a provided function once for each 2d array element.
   *
   * @param {function} f - Fill function for the 2d array.
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
   * Condense the 2d array to the minimum by removing all the empty rows and columns on the outside. This process is irreversible.
   */
  condense () {
    this.condenseColumns()
    this.condenseRows()
  }

  /**
   * Returns the 2d array.
   *
   * @return {Array2D} - Returns the 2d array.
   */
  get array2D () {
    return this._array2D
  }

  /**
   * return the width(column count) of the 2d array.
   *
   * @return {Number} - Returns the width of the 2d array.
   */
  get width () {
    return this.array2D.length
  }

  /**
   * return the height(row count) of the 2d array.
   *
   * @return {Number} - Returns the height of the 2d array.
   */
  get height () {
    return this.array2D[0].length
  }
}
