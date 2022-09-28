let mahasiswa = {
  nama: "rully",
  lulus: true,
  IPSemester: [3, 3.3, 2.9, 3.5],
  IPKomulatif: function () {
    let total;
    let ips = this.IPSemester;
    for (let i = 0; i < this.IPSemester.length; i++) {
      total = +ips[i];
    }
    return total / ips.length;
  },
};

//console.log(mahasiswa.IPKomulatif());

let orang = {
  nama: "rully",
  umur: 31,
  IPSemester: [3, 3.3, 2.9, 3.5],
  alamat: {
    jalan: "Jl.Abc No.123",
    kota: "Depok",
    provinsi: "Jawa Barat",
  },
};

//console.log(orang.alamat["jalan"]);
//console.log(orang.alamat.jalan);

//Object :

//Object Literal

let data = {
  nama: "Lebron James",
  npm: "12345",
  email: "lebron@lakers.com",
  jurusan: "Basketball",
};

//Functional Declaration
//pengisian data bisa hardcord bisa menggunakan property seperti dibawah.
function dataObject(nama, npm, email, jurusan) {
  let data = [];
  data.nama = nama; //"Stephen Curry";
  data.npm = npm; //"12345";
  data.email = email; //"stephencurry@gws.com";
  data.jurusan = jurusan; //"Golden Wariors State";

  return data;
}

let dataNba = dataObject(
  "Stephen Curry",
  "12345",
  "stephencurry@gws.com",
  "Golden Wariors State"
);

//Constructor
//kalau di constructor secara otomatis kita mempunyai let this = [] dan return this
function dataObjectNba(nama, npm, email, jurusan) {
  //let this = []
  this.nama = nama; //"Stephen Curry";
  this.npm = npm; //"12345";
  this.email = email; //"stephencurry@gws.com";
  this.jurusan = jurusan; //"Golden Wariors State";
  //return this;
}

let NewdataNba = new dataObjectNba(
  "Stephen Curry",
  "12345",
  "stephencurry@gws.com",
  "Golden Wariors State"
);

//Konsep This
//sebuah keyword special yg otomatis didefinisikan pada setiap function
//console.log(this);
//sama dengan console.log(window)
let a = "halo";
//console.log(this.a); //halo
//console.log(window.a); //halo

//ketika this dimasukkan kedalam object
let obj = { a: "rully", b: "oetama" };
obj.halo = function () {
  console.log(this);
  console.log("halo");
  return this;
};

obj.halo;
