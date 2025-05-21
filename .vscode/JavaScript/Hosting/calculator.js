/*
let num1 = prompt("please enter a 1st number:");
let num2 =prompt("please enter a 2nd number");
let opr = prompt("please select opretors +,-,*,%,/");

switch(opr)
{
     case "+":
        let result =parseFloat(num1) + parseFloat(num2);
        console.log("result:",result);
        break;

        case "-":
        var result=parseFloat(num1)- parseFloat(num2);
        console.log("result:",result);
        break;

        case "*":
        var result= parseFloat(num1)* parseFloat(num2);
        console.log("result:",result);
        break;

        case "/":
        var result= parseFloat(num1)/ parseFloat(num2);
        console.log("result:",result);
        break;

        case "%":
        var result= parseFloat(num1) % parseFloat(num2);
        console.log("result:",result);
        break;


       default:
     console.log("invalid opretors");
}
*/
let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let opr = process.argv[4];

let result;

switch(opr) {
  case "+":
    result = num1 + num2;
    console.log("Result:", result);
    break;
  case "-":
      result = num1 - num2;
    console.log("Result:", result);
    break;
  case "*":
    result = num1 * num2;
    console.log("Result:", result);
    break;
  case "/":
    result = num1 / num2;
    console.log("Result:", result);
    break;
  case "%":
    result = num1 % num2;
    console.log("Result:", result);
    break;
  default:
    console.log("Invalid operator");
}

