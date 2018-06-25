import Array2D from './../src/Array2D'
import test from 'ava'

test('create empty 2d array', t => {
  const array2D = new Array2D()
  t.truthy(array2D)
})

test('get 2d array', t => {
  const array2D = new Array2D()
  t.truthy(array2D.array2D)
})

test('create 10 x 10 2d array and check width, height', t => {
  const array2D = new Array2D(10, 10)
  t.truthy(array2D)
  t.is(array2D.width, 10)
  t.is(array2D.height, 10)
})

test('get empty postion at 5, 5', t => {
  const array2D = new Array2D(10, 10)
  const item = array2D.getPosition(5, 5)
  t.falsy(item)
})

test('fill postion at 5, 5 with x', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillPosition(5, 5, 'x')
  const item = array2D.getPosition(5, 5)
  t.is(item, 'x')
})

test('clear postion at 5, 5', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillPosition(5, 5, 'x')
  let item = array2D.getPosition(5, 5)
  t.is(item, 'x')
  array2D.clearPosition(5, 5)
  item = array2D.getPosition(5, 5)
  t.falsy(item)
})

test('forEach loop over every item', t => {
  const array2D = new Array2D(10, 10)
  let xPos = 0
  let yPos = 0
  array2D.forEach((item, { x, y }) => {
    t.falsy(item)
    t.is(x, xPos)
    t.is(y, yPos)
    xPos += 1
    xPos %= 10
    xPos === 0 && (yPos += 1)
  })
})

test('find item in 2d array at position 9, 9', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillPosition(9, 9, 'x')
  const position = array2D.findPosition('x')
  t.truthy(position)
  t.is(position.x, 9)
  t.is(position.y, 9)
})

test('get empty column at position 2', t => {
  const array2D = new Array2D(10, 10)
  const column = array2D.getColumn(2)
  t.truthy(column)
  t.is(column.length, 10)
})

test('add empty column at position 9', t => {
  const array2D = new Array2D(10, 10)
  array2D.addColumn(9)
  t.is(array2D.width, 11)
  const column = array2D.getColumn(9)
  t.truthy(column)
  t.is(column.length, 10)
  t.falsy(column[2])
})

test('remove column at position 9', t => {
  const array2D = new Array2D(10, 10)
  array2D.removeColumn(9)
  t.is(array2D.width, 9)
})

test('fill column at position 5 with x', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillColumn(5, _ => 'x')
  const column = array2D.getColumn(5)
  column.forEach(item => (t.is(item, 'x')))
})

test('clear column at position 5', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillColumn(5, _ => 'x')
  let column = array2D.getColumn(5)
  column.forEach(item => (t.is(item, 'x')))
  array2D.clearColumn(5)
  column = array2D.getColumn(5)
  column.forEach(item => (t.falsy(item)))
})

test('get empty row at position 2', t => {
  const array2D = new Array2D(10, 10)
  const row = array2D.getRow(2)
  t.truthy(row)
  t.is(row.length, 10)
})

test('add empty row at position 9', t => {
  const array2D = new Array2D(10, 10)
  array2D.addRow(9)
  t.is(array2D.height, 11)
  const row = array2D.getRow(9)
  t.truthy(row)
  t.is(row.length, 10)
  t.falsy(row[2])
})

test('remove row at position 9', t => {
  const array2D = new Array2D(10, 10)
  array2D.removeRow(9)
  t.is(array2D.height, 9)
})

test('fill row at position 5 with x', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillRow(5, _ => 'x')
  const row = array2D.getRow(5)
  row.forEach(item => (t.is(item, 'x')))
})

test('clear row at position 5', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillRow(5, _ => 'x')
  let row = array2D.getRow(5)
  row.forEach(item => (t.is(item, 'x')))
  array2D.clearRow(5)
  row = array2D.getRow(5)
  row.forEach(item => (t.falsy(item)))
})

test('condense 10 x 10 2d array to 1 x 1', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillPosition(5, 5, 'x')
  array2D.condense()
  t.is(array2D.width, 1)
  t.is(array2D.height, 1)
})

test('condense 10 x 10 2d array to 3 x 3', t => {
  const array2D = new Array2D(10, 10)
  array2D.fillPosition(5, 5, 'x')
  array2D.fillPosition(5, 6, 'x')
  array2D.fillPosition(5, 7, 'x')
  array2D.fillPosition(6, 5, 'x')
  array2D.fillPosition(7, 5, 'x')
  array2D.condense()
  t.is(array2D.width, 3)
  t.is(array2D.height, 3)
})