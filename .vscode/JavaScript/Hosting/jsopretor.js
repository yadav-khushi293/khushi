/*
addition +
subtraction -
multiplication *
Division /
modules(Reminder)%
Exponentional ** (eg = 2**3=8)
Incrementd ++
Decrements--
*/
//using basic maths
/*let num1=4;
let num2=5;
let sum = num1 + num2;
console.log(sum);

let multi = num1 * num2;
console.log(multi);

let Division = num1 / num2;
console.log(Division);

let subtraction = num1 -num2;
console.log(subtraction);

let modules = num1 % num2;
console.log(modules);

num1 ++;
console.log(num1);
num2 --;
console.log(num2);

/*console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1 ++);
console.log(num2--);
console.log(num2++);
console.log()*/

/* asingnments opertors
1. = :Assign
2.+= :Add & Assign
3.-= :Subtract & Assign
4.*= : multiply & Assign
5./= :Division & Assign
6.%= :Modules & Assign
*/
/*
let num1 = 4;
num1 *= 2;
console.log(num1);*/


/*comparision*/
let num1=2;
let num2=3;
console.log("checking", num1==num2);
/*
1.== ->Data value
2.=== -> Data types


let num4="2";
let num5=3;
console.log("checkout", num4===num5);

let flag1=false;
console.log(flag1!=true);

/*
!= ->data value
!== -> data types

let flag3=false;
console.log(flag3!==true);

/* tsak
>
<
>=
<=


let num7=5;
let num8=8;

/*console.log(num7<num8);

let num9=6;
let num10=10;

console.log(num10>num9);

let num11=12;
let num12=13;

console.log(num11<=num13);

let num14=14;
let num15=15;

console.log(num14>=num15);


/*
logical opretar
|| -> OR --> only one condition can true
&& ->AND --> both conditon are true
! -> NOT --> its convert true to false and flase to true 
*/
/*
console.log(num1==num2-1 && num7<num8)
console.log(flag1!=true || num1==num2-1 )
let flag4= true;
console.log("flag4:", !flag4 );*/

/* string operators
+ -> concatination
+= -> Append String
*/
/*
let name1 = "khushi";
let name2 = "yadav";
let full_name = name1 + "" + name2;
console. log("full_name", full_name);
name1+= "" +name2;
console.log("name1:",name1);*/

/*conditional operators*/

let age=18;
let Valcheck = 1<18 ? "Eligable for Voting" : "Not Eligable for Voting";
console.log(Valcheck)

/* Spread operators*/
let arr=[1, 2, 3, 4, 5];
let newarr=[...arr,6, 7, 8, 9,];
console.log("newarr:", newarr);

/* rest operators*/
const sum =(...args) =>{
    console.log("args:",args);
};
sum(1,2,3);

/* converstion*/

let number=42;
let binaryConv= number.toString(2);
console.log("binaryConv:",binaryConv);

/* binary to number*/
let bin_to_num=parseInt(binaryConv,2);
console.log("bin_to_num:",bin_to_num);

/* number to string*/
let num=88;
let Newdata =num33.toString();
console.log("Newdata:",Newdata);
console.log("Newdata:",typeof Newdata);

let Newdata1= string(num33);
console.log("Newdata1:",Newdata1);
console.log("Newdata1:",typeof Newdata1);

let Newdata2= string(num33);
console.log("Newdata2:",Newdata2);
console.log("Newdata2:",typeof Newdata2);


