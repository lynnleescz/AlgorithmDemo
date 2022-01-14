/**
 * 快排双边循环
 */

function quickSort(arr, startIndex, endIndex) {
  if (endIndex < startIndex) {
    return
  }
  const pivotindex = partition(arr, startIndex, endIndex)
  quickSort(arr, startIndex, pivotindex - 1);
  quickSort(arr, pivotindex + 1, endIndex);
}

// 分治函数
function partition(arr, startIndex, endIndex) {
  let pivot = arr[startIndex]
  let right = endIndex
  let left = startIndex
  while (right != left) {
    while (left < right && arr[right] > pivot) {
      right--
    }

    while (left < right && arr[left] <= pivot) {
      left++
    }
    if (left < right) {
      const tmp = arr[right]
      arr[right] = arr[left]
      arr[left] = tmp
      console.log(`交换：, left: ${left}, right: ${right}, arr: ${arr}`)
    }
  }
  arr[startIndex] = arr[left]
  arr[left] = pivot
  console.log(`交换povit：, left: ${left}, right: ${right}, arr: ${arr}`)
  return left
}

const arr = [4, 8, 7, 6, 7, 9, 1, 5]
quickSort(arr, 0, arr.length - 1)
console.log(arr)