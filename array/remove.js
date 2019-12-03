function remove(array, position) {
  if (position < 0 || position >= array.length) {
    console.log("数组越界")
    return -1
  }
  let newArray = new Array(array.length - 1)
  for (let i = 0; i < newArray.length; i++) {
    if (i < position) {
      newArray[i] = array[i]
    } else {
      newArray[i] = array[i+1]
    }
  }
  newArray.forEach(na => {
    console.log(na)
  })
  return newArray
}

remove([1, 2, 3, 4], -1)
console.log('---')
remove([1, 2, 3, 4], 0)
console.log('---')
remove([1, 2, 3, 4], 2)
console.log('---')
remove([1, 2, 3, 4], 3)
console.log('---')
remove([1, 2, 3, 4], 4)
