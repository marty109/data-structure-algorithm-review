// 斐波那契线性递归
function fibRecursive(n) {
  if (n === 1 || n === 2)
    return 1
  return fibRecursive(n - 1) + fibRecursive(n - 2)
}

// 斐波那契尾递归
function fibTailRecursive(n, res1, res2) {
  if (n === 1 || n === 2)
    return res1
  return fibTailRecursive(n - 1, res2, res1 + res2)
}

// 阶乘线性递归
function factorialRecursive(n) {
  if (n === 1)
    return 1
  return n * factorialRecursive(n - 1)
}

// 阶乘尾递归
function factorialTailRecursive(n, result) {
  if (n === 1)
    return result
  return factorialTailRecursive(n - 1, n * result)
}

console.log('fibRecursive :')
for (let i = 1; i < 7; i++) {
  console.log(fibRecursive(i))  
}

console.log('fibTailRecursive :')
for (let i = 1; i < 7; i++) {
  console.log(fibTailRecursive(i, 1, 2))
}

console.log('factorialRecursive :')
console.log(factorialRecursive(4))

console.log('factorialTailRecursive :')
console.log(factorialTailRecursive(4, 1))