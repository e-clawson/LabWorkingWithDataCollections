
let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

function feelingLoopy(file) { 
   let rows = file.split("\n")
    numberOfColumns = rows[0].split(',').length;
    for (let i=0; i <rows.length; i++) {
        rows[i] = rows[i].split(",")
    }
    newArray = rows
    console.log(numberOfColumns)
    console.log(newArray)
}
feelingLoopy(csv);

let cell = ""; //""
let row = [];
let data = [];
for (let i = 0; i < csv.length; i++) {
  let currentCharacter = csv[i];
  //when the currentCharater is comma or string don't add it?
  if (currentCharacter !== "," && currentCharacter !== "\n") {
    cell = cell + currentCharacter;
  }
  // this is add last cell to the row array then resets so it can hold next cell
  if ("," === currentCharacter) {
    row.push(cell);
    cell = "";
  }
  //at the end
  // this is adds last rows to the data array then resets so it can hold next row
  else if  (currentCharacter === "\n" || i === csv.length - 1) {
    row.push(cell);
    cell = "";
    data.push(row);
    row = [];
  }
}
// console.log(data);
let newData = []
for (let i =1;i<data.length;i++){
  let row = data[i]
console.log(row)
  let obj = {}
  obj.id = row[0]
  obj.name= row[1]
  obj.occupation = row[2]
  obj.age = row[3]
  newData.push(obj)
}
  console.log(newData)







