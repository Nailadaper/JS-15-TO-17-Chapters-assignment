// =====================Q1 =============
// Declare an empty array using JS literal notation to store
// student names in future.
// var studentName=[ ]
// ===============Q2===========================
// 2. Declare an empty array using JS object notation to store
// student names in future.
// var studentName={names:[ ]}
// ======================Q3========================
// 3. Declare and initialize a strings array.
// var fruits=[ "apple", "mango", "banana"];
// document.write(fruits[1]);

// 4. Declare and initialize a numbers array.
// var students=[ 1, 2, 3, 4, 5];
// document.write(students[2]);

// 5. Declare and initialize a boolean array.
// var booleanarray=[ true, False, tue, true];
// document.write(booleanarray);
// // 6. Declare and initialize a mixed array.
// var mixedarray=[ "apple", "mango", 1,2,3];
// document.write(mixedarray);

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:   
//    var education=["SC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//  document.write("<h1> Qualifications </h1>");
//  document.write(education[1]+"<br>");
//  document.write(education[2]+"<br>");
//  document.write(education[3]+"<br>");
//  document.write(education[4]+"<br>");
//  document.write(education[5]+"<br>");
//  document.write(education[6]+"<br>");
//  document.write(education[7]+"<br>");


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var students_Names=["Naila", "Noorul ain", "Tahira"];
// var scores=[500, 500, 450]
// document.write("Score of ", students_Names[0], " are ", scores[0]," . Percentage: ", (scores[0]*100)/500 + "%","<br>");

// document.write("Score of ", students_Names[1], " are ", scores[1]," . Percentage: ", (scores[1]*100)/500 + "%","<br>");

// document.write("Score of ", students_Names[2], " are ", scores[2]," . Percentage: ", (scores[2]*100)/500 + "%","<br>");

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var color_Names=["Red", "Yellow", "Green", "White"];
// document.write(color_Names);


// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// let arr = ["blue", "green", "red", "white", "brown", "pink", "black","maroon"];
// console.table("old array", arr);
// //part => a
// let begining_color = prompt("enter the color name you want to add at begining");
// arr.unshift(begining_color);
// console.table("added the color at the begining of array", arr);
// //part => b
// let end_color = prompt("enter the color name you want to add at end");
// arr.push(end_color);
// console.table("added the color at the end of array", arr);
// //part => c
// arr.unshift("yellow", "orange");
// console.table("added the names of two more colors at the begining", arr);
// //part => d
// arr.shift();
// console.table("deleted the first color", arr);
// //part => e
// arr.pop();
// console.table("deleted the last color", arr);
// //part => f
// let index_no_to_add = +prompt("emter index no at which you want to add a value");
// let color_name = prompt("enter name of color you want to add");
// arr.splice(index_no_to_add, 0, color_name);
// console.table("added the color: ", color_name, " at index no: ",index_no_to_add, arr);
// //part => g
// let index_no_to_del = +prompt("emter index no at which you want to del a value");
// let quantity = prompt("how many colors you want to delete");
// arr.splice(index_no_to_del, quantity);
// console.table("deleted the ",quantity, " colors from index no: ",index_no_to_del, arr);


// // =====================QUESTION : 10===================
// // 10. Write a program to store student scores in an array &
// // sort the array in ascending order using Array’s sort
// // method.

// let scores = [74,384,251,43,12,3544];
// let sort_arr = scores.sort(function(a,b){
//     if(a>b){
//         return b
//     }
//     else{
//         return -1
//     }
// });
// console.log("unsorted array ", scores);
// console.log("sorted array ", sort_arr);



//  // =====================QUESTION : 12===================
// //  12. Write a program to create a single string from the
// // below mentioned array:
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// // (Use array’s join method)

// let arr = [" my", " name", " is", " sarah", " sajid"];
// let joined = arr.join(" ");
// console.log(arr.join(""));




// // =====================QUESTION : 13===================
// // Create a new array. Store values one by one in such a way
// // that you can access the values in the order in which they
// // were stored. (FIFO-First In First Out)

// let arr = [];
// arr.push("keyboard");
// arr.push("mouse");
// arr.push("printer");
// arr.push("monitor");
// console.log(arr);
// console.log("0th element ",arr[0]);
// console.log("1st element ",arr[1]);
// console.log("2nd element ",arr[2]);
// console.log("3rd element ",arr[3]);



// =====================QUESTION : 14===================
// 4. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
let arr = [];
arr.push("keyboard");
arr.push("mouse");
arr.push("printer");
arr.push("monitor");
console.log(arr);
arr.reverse();
console.log("0th element ",arr[0]);
console.log("1st element ",arr[1]);
console.log("2nd element ",arr[2]);
console.log("3rd element ",arr[3]);