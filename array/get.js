function get(array, position) {
  if (position < 0 || position >= array.length) {
    console.log("数组越界")
    return -1
  }
  console.log(array[position])
  return array[position]
}

get([1, 2, 3, 4], -1)
console.log('---')
get([1, 2, 3, 4], 0)
console.log('---')
get([1, 2, 3, 4], 4)