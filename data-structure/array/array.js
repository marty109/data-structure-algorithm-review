function get(array, position) {
  if (position < 0 || position >= array.length) {
    console.log("数组越界")
    return -1
  }
  console.log(array[position])
  return array[position]
}

function insert(array, element, position) {
	// step-0 判断插入是否越界
	if (position > array.length || position < 0) {
		console.log("数组越界")
		return -1
	}
	// 尾部插入
	if (position == array.length) {
		array[position] = element
		array.forEach(a => {
			console.log(a)
		})
		return array
	}
	// step-1 将老数组复制到新数组并统一往后挪一位，为新元素腾出空间
	let newArray = new Array(array.length + 1)
	for (let i = 0; i < array.length; i++) {
		if (i < position) {
			newArray[i] = array[i]
		} else {
			newArray[i+1] =  array[i]
		}
	}
	// step-2 插入新元素
	newArray[position] = element
	newArray.forEach(na => {
		console.log(na)
	})
	return newArray
}

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

console.log('get test : ')
console.log('---')
get([1, 2, 3, 4], -1)
console.log('---')
get([1, 2, 3, 4], 0)
console.log('---')
get([1, 2, 3, 4], 4)

console.log('\n')
console.log('insert test : ')
console.log('---')
insert([1, 2, 3, 4], 6, -1)
console.log('---')
insert([1, 2, 3, 4], 6, 0)
console.log('---')
insert([1, 2, 3, 4], 6, 2)
console.log('---')
insert([1, 2, 3, 4], 6, 4)
console.log('---')
insert([1, 2, 3, 4], 6, 5)

console.log('\n')
console.log('remove test : ')
console.log('---')
remove([1, 2, 3, 4], -1)
console.log('---')
remove([1, 2, 3, 4], 0)
console.log('---')
remove([1, 2, 3, 4], 2)
console.log('---')
remove([1, 2, 3, 4], 3)
console.log('---')
remove([1, 2, 3, 4], 4)

console.log('\n')
console.log('update test : ')
console.log('---')
update([1, 2, 3, 4], 6, -1)
console.log('---')
update([1, 2, 3, 4], 6, 2)
console.log('---')
update([1, 2, 3, 4], 8, 2)
console.log('---')
update([1, 2, 3, 4], 8, 10)