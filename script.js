// part 1 - refactoring part 3 from old lab
let csv = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

        function feelingLoopy(file) {
            let rows = file.split("\n") // splits the string every time it reaches "\n"
            numberOfColumns = rows[0].split(',').length; // stores the number of columns in each row
            for (let i = 0; i < rows.length; i++) {
                rows[i] = rows[i].split(",") // iterates over each row and splits each into a separate
            }
            newArray = rows
            console.log(numberOfColumns) // prints the number of columns in each row in the inspector
            console.log(newArray) // prints the new array in the inspector
        }feelingLoopy(csv);

        // part 2
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

    //part 3


    // part 4 
        //Using array methods, accomplish the following tasks, in order upon the result of Part 3:
        // Remove the last element from the sorted array.
        newData.splice(3)

        // Insert the following object at index 1:{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
        newData.unshift({id: "48", name: "Barry", occupation: "Runner", age: "25"})

        // Add the following object to the end of the array: { id: "7", name: "Bilbo", occupation: "None", age: "111" }
        newData.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})

        // Finally, use the values of each object within the array and the array’s 
        // length property to calculate the average age of the group. 
        // This calculation should be accomplished using a loop.
      
        let ages = newData.map(a => Number(a.age)); //need to turn these into numbers not strings

        function avgAge(ages) {
            let sum = 0;
            for (let i = 0; i < ages.length; i++) {
                sum += ages[i];
            }
            return ((sum) / (ages.length));
        }
        console.log(avgAge(ages))

//     // part5

//     let newData2 = [
//         {
//             id: 42,
//             name: 'Bruce',
//             occupation: 'Knight',
//             age: 41
//         }, {
//             id: 57,
//             name: 'Bob',
//             occupation: 'Fry Cook',
//             age: 19
//         }, {
//             id: 63,
//             name: 'Blaine',
//             occupation: 'Quiz Master',
//             age: 58
//         }, {
//             id: 98,
//             name: 'Bill',
//             occupation: 'Doctor’s Assistant',
//             age: 26
//         }
//     ];
//     // Ensure there's data to convert
//     function fullCircle(newData2) {
//     if (newData2.length > 0) { // Extract headers from the keys of the first object
//         const headers = Object.keys(newData2[0]);
//         // Create CSV header row
//         let csvString = headers.join(',') + '\n';
//         // Create CSV data rows
//         csvString += newData2.map(row => headers.map(field => {
//             let value = row[field];
//             // Ensure the value is wrapped in quotes if it contains a comma or newline
//             if (value.includes(','), value.includes('\n') || value.includes('"')) {
//                 value = $value.replace(/"/g, '""')
//             }
//         }))
//         // Wrap in quotes and escape inner quotes
//     } else {
//         value = String(value);
//         // Convert to string if no special characters
//     }
//     return value.join(',').join('\n');// Output the CSV string console.log(csvString);}
// }