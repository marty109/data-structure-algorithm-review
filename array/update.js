function update(array, element, position) {
  if (position < 0) {
    console.log('数组越界')
    return -1
  }
  array[position] = element
  array.forEach(a => {
    console.log(a)
  });
  return array
}

update([1, 2, 3, 4], 6, -1)
console.log('---')
update([1, 2, 3, 4], 6, 2)
console.log('---')
update([1, 2, 3, 4], 8, 2)
console.log('---')
update([1, 2, 3, 4], 8, 10)