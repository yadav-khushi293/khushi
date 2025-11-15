// | Method     | Return karta hai | Use hota hai kis ke liye                        | Mutates original array? |
// | ---------- | ---------------- | ----------------------------------------------- | ----------------------- |
// | `map()`    | New array        | Har element ko transform karne ke liye          | ❌ No                    |
// | `filter()` | New array        | Condition ke hisaab se elements nikalne ke liye | ❌ No                    |
// | `reduce()` | Single value     | Array ko ek value mein combine karne ke liye    | ❌ No                    |

// 🔹 1. map()
// 👉 What it does:

// map() runs a function on every element of an array and returns a new array with the transformed values.


// 🔹 2. filter()
// 👉 What it does:

// filter() checks each element against a condition and returns a new array containing only the elements that pass the test (return true).

// 🔹 3. reduce()
// 👉 What it does:

// reduce() processes all elements of an array and combines them into a single value (like a sum, product, or object).


//let ==>  is block-scoped which means everey iteretion of the loop creates a new copy of i 
//var ==>var is function-scoped ,not block-scoped

// for(var i=0; i<3; i++){
//     setTimeout(()=>console.log(i),100)
// }



// const array =[1,2,3,4,5,6,7,8,9,10];
// const array1=array.map(num=>num*6)
// console.log(array1);

// const reduce=[9,8,7,6,5,4,3,2,1];
// const reduce1=reduce.filter(num=>num%2==0)
// console.log(reduce);

const arr=[1,2,3,4,5];
arr.splice(3);
console.log(arr);
console.log(arr.length);


console.log("khushi");