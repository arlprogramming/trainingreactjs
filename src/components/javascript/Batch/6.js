function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

console.log(useWindowSize);

function StringChallenge(str) {
  // code goes here
  let arr = str.toLowerCase().split("");
  let arrNew = arr.replace(/[^\w ]/g, "");
  let result = arrNew.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  return result.join("");
}

// keep this function call here
console.log(StringChallenge("a b c d-e-f%g"));

function StringChallenge(str) {
  // code goes here
  let arr = str.toLowerCase().split("");
  arr.join();

  return result.join("");
}

// keep this function call here
console.log(StringChallenge("a b c d-e-f%g"));

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);

  reject("error");
});
promise
  .then(() => {
    console.log(3);
  })
  .catch((e) => console.log(e));
console.log(4);

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) {
    console.log(arr[i] + " ");
    console.log("\n");
  }
}

var arr = [64, 34, 25, 12, 22, 11, 90];
var n = 7;

printArray(arr, n);
document.write("Sorted array: \n");
printArray(arr, n);

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

var arr = [64, 34, 25, 12, 22, 11, 90];
var n = 7;

bubbleSort(arr, n);

function fib(n, a = 0, b = 1) {
  if (n == 0) {
    return a;
  }
  if (n == 1) {
    return b;
  }
  return fib(n - 1, b, a + b);
}

let n = 9;
console.log(`fib(${n}) =  ${fib(n)}`);
