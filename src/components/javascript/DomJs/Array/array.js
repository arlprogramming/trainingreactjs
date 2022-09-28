//DOM Selection
//getElementById => document.getElementById();
// const judul = document.getElementById("judul");

// let user = {
//   name: "John",
//   age: 30,
// };

// let a = Object.entries(user);
// console.log(a);

// let b = a.length;
// console.log(b);

// for (let i = 0; i <= a.length - 1; i++) {
//   console.log("ini index ke - " + [i] + " :" + a[i]);
// }

//-----------------------------------------------------------------------------------------------Push data Array
let arr = ["Lebron", "Curry", "NBA"];
arr.push("Kobe"); //(4) ['Lebron', 'Curry', 'NBA', 'Kobe']
console.log(arr); //(4) ['Lebron', 'Curry', 'NBA', 'Kobe']
console.log(arr.join(" - ")); //Lebron - Curry - NBA - Kobe

//-----------------------------------------------------------------------------------------------Pop data Array
arr.pop(); //(3) ['Lebron', 'Curry', 'NBA']
console.log(arr); //(3) ['Lebron', 'Curry', 'NBA']

//-----------------------------------------------------------------------------------------------Unshift
//Unshift data Array => menambahkan data pertama pada array
arr.unshift("Kobe"); //(4) ['Kobe', 'Lebron', 'Curry', 'NBA']
console.log(arr);

//-----------------------------------------------------------------------------------------------Shift
//Shift data Array => menghapus data pertama pada array
arr.shift("Kobe"); //(3) ['Lebron', 'Curry', 'NBA']
console.log(arr);

//-----------------------------------------------------------------------------------------------Splice
//Splice > manambah data array di tengah-tengah /dimanapun
//splice(IndexAwal, MaudiHapusapa, Elementbaru, ...)
arr.splice(2, 0, "Thompson"); //(4) ['Lebron', 'Curry', 'Thompson', 'NBA']
console.log(arr.join(" - ")); //Lebron - Curry - Thompson - NBA

//------------------------------------------------------------------------------------------------SLice
//Slice > memisahkan data array
//slice(awal,akhir)
let arr2 = arr.slice(1, 3); //kenapa 1,3 supaya array 1 dan 2 keambil dan 3 nya tidak
console.log(arr2.join(" - ")); //Curry - Thompson

//-----------------------------------------------------------------------------------------------forEach
//Foreach & Map > untuk looping array
//perbedaanya > foreach tidak mengembalikan nilai array kalau map mengembalikan nilai array

//cara baca konsep foreach => untuk setiap element pada array arr lakukan function bertikut
//contoh dibawah menggunakan FUNCTON EXPRESSION
//bisa juga seperti ini

// let contoh = function (e) {
//   console.log(e);
// };

// arr.forEach(contoh);

arr.forEach(function (e) {
  console.log(e);
});

//untuk menampilkan index nya :
arr.forEach(function (e, i) {
  console.log(`Mahasiswa ke-${i + 1} : ${e}`);
});

//------------------------------------------------------------------------------------------------map
let numbers = [1, 2, 3, 4, 5];
numbers.map(function (e) {
  console.log(e);
});

//tapi jika kita return
numbers.map(function (e) {
  return e; //akan mengembalikan Array > (5) [1, 2, 3, 4, 5]
});

console.log(numbers);

//------------------------------------------------------------------------------------------------Sort
//sebelum sort
console.log(numbers.join(" - ")); // 1 - 2 - 3 - 4 - 5

// sesudah sort
numbers = [5, 3, 4, 2, 1];

numbers.sort(); // 1 - 2 - 3 - 4 - 5
console.log(numbers.join(" - ")); // 1 - 2 - 3 - 4 - 5

//tapi sort diatas hanya membaca 1 angka ketika ada 2 angka seperti 10, 20, ... sort biasa tisak akan mengurutkannya
//cara nya menggunakan seperti dibawah ini untuk lebih dari 1 angka
numbers = [5, 20, 100, 10, 3, 4, 2, 1];
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers.join(" - ")); // 1 - 2 - 3 - 4 - 5 - 10 - 20 - 100

//Filter & Find
//Find > mengembalikan 1 nilai (Tidak mengembalikan Array)
//Filter > mengmbalikan banyak nilai (mengembalikan Array)

//-------------------------------------------------------------------------------------------------Filter
let judul = ["Dragonball", "Shinchan", "Spiderman"];

let Search = judul.filter(function (x) {
  return x == "Spiderman";
});

console.log(Search);

//-------------------------------------------------------------------------------------------------Find
Search = judul.find(function (x) {
  return x == "Spiderman";
});

console.log(Search);
