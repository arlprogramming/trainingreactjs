/*
    ============
    Slice & Dice
    ============

    
*/

function slice(data, index) {
  //Code here
  let result = [];
  let indexAwal = index[0];
  let indexAkhir = !index[1] ? data.length : index[1];
  if (!indexAwal) {
    return data;
  }

  for (let i = 0; i < data.length; i++) {
    if (i >= indexAwal && i <= indexAkhir) {
      result.push(data[i]);
    }
  }
  return result;
}

console.log(slice(["ant", "bison", "camel", "duc", "elephant"], [2])); //["camel", "duc", "elephant"]
