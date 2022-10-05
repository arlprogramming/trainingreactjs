//--------------------------------------------------------------- This About TwoSum

// function twoSum(arr, target){
//     for(let i = 0; i < arr.length; i++)
//     {
//         console.log([i])
//         for (let j = i + 1; j < arr.length; j++)
//         {
//             console.log([j])
//             if(arr[i] + arr[j] == target){
//                 return [arr[i],arr[j]]
//             }
//         }
//     }
// }

// const nums1 = [1, 7, 6, 2]
// console.log(twoSum(nums1, 9))

//--------------------------------------------------------------- This About TwoSum

// function twoNumberSum(array, targetSum) {
//   // Write your code here.
//   const sortedArray = array.sort((a, b) => a - b);

//   let left = 0;
//   let right = sortedArray.length - 1;

//   while (left < right) {
//     //console.log(left, right)
//     const currentSum = sortedArray[left] + sortedArray[right];

//     if (currentSum === targetSum) {
//       return [sortedArray[left], sortedArray[right]];
//     } else if (currentSum > targetSum) {
//       right--;
//     } else if (currentSum < targetSum) {
//       left++;
//     }
//   }
//   return [];
// }

//--------------------------------------------------------------- This About Splice array double

// function test() {
//   const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
//   for (let i = 0; i <= arr.length; i++) {
//     for (let j = i + 1; j <= arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         var spliced = arr.splice(arr[j], 1);
//         console.log(spliced)
//       }
//     }
//   }
// }

// var removeDuplicates = function (nums) {
//     nums.forEach(function (item, index) {
//       while (item === nums[index + 1]) {
//         nums.splice(index, 1);
//       }
//       return nums;
//     });
//   };
  
//   console.log(removeDuplicates)
  
//--------------------------------------------------------------- This About Segitiga Siku-siku

function segitiga1(panjang) {
  let hasil = '';
  for (let i = 0; i < panjang; i++) {
      for (let j = 0; j <= i; j++) {
          hasil += '* ';
      }
      hasil += '\n';
  }
  return hasil;
}
console.log(segitiga1(10));

//--------------------------------------------------------------- This About Segitiga Siku-siku terbalik

function segitiga2(panjang) {
  let hasil = '';
  for (let i = 0; i < panjang; i++) {
      for (let j = panjang; j > i; j--) {
          hasil += '* ';
      }
      hasil += '\n';
  }
  return hasil;
}
console.log(segitiga2(10));

//--------------------------------------------------------------- This About Segitiga Siku-siku hadap kiri

function segitiga3(panjang) {
  let hasil = '';
  for (let i = panjang; i > 0; i--) {
      for (let j = 1; j <= panjang; j++) {
          if (j >= i) {
              hasil += '* ';
          } else {
              hasil += ' '
          }
      }
      hasil += '\n';
  }
  return hasil;
}
console.log(segitiga3(10));

//--------------------------------------------------------------- This About Segitiga Siku-siku hadap kiri terbalik

function segitiga4(panjang) {
  let hasil = '';
  for (let i = panjang; i > 0; i--) {
      for (let j = panjang; j > 0; j--) {
          if (j > i) {
              hasil += ' ';
          } else {
              hasil += '* '
          }
      }
      hasil += '\n';
  }
  return hasil;
}
console.log(segitiga4(10));