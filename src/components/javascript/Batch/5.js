let input = "aaaasssiia";

function split(split) {
  let a = split.substring(0, 4);
  let s = split.substring(4, 7);
  let i = split.substring(7, 9);
  let a2 = split.substring(9, 11);

  let data1 = a.split("").length;
  let data2 = s.split("").length;
  let data3 = i.split("").length;
  let data4 = a2.split("").length;

  console.log([{ a: data1 }, { s: data2 }, { i: data3 }, { a: data4 }]);
}

console.log(split(input));
