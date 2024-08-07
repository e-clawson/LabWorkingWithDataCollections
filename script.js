
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
console.log(newArray);

// Function to parse and log CSV data
// let csv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// function feelingLoopy(file) {
//     // Split the CSV string into rows
//     let rows = file.split("\n");
    
//     // Loop through each row
//     for (let i = 0; i < rows.length; i++) {
//         // Split each row into cells
//         let cells = rows[i].split(",");
        
//         // Log each row's cells
//         console.log(cells.join(', '));
//     }
// }
// // Call the function with the CSV data
// feelingLoopy(csv);


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







