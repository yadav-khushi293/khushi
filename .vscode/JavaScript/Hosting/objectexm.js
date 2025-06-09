/*let car ={
    brand: 'alto',
    model:'800',
    years:1999,

    automation:{
        name:'advance alto',
        madel:'1200',
        years:'1880'
    },

    myFun: function(){
        console.log('hello');
    },
    hobbies:['cod','gow','gta'],
    married:false,
};
function haskey(obj,key){
    let flag = false;
    for(let val in obj){
        if (val===key){
            flag = true;
        }
    }
    return flag;
    let ans = haskey(car,'maried');
    console.log('ans:',ans);
}


//task2
const{brand,years,model,...rest}=car;
console.log('brand:',brand);
console.log('model:', model);
console.log(' years:',  years);
console.log(' rest:',  rest);
*/
/*
let student ={
    name:'alice',
    address: {
        city:'new york',
        zip:'10001'
    },
    grades:{
        math:90,
        english:85,
    }
};
console.log("city:",student.address.city);

/*

// Whrite function create(title, author,years)cunstructor function with normal functionbase...
//this form function
function CreateBook(title,author,year){
  this.title=title;
  this.author=author;
  this.year=year;
}

const Book = new CreateBook('harry-potter','dumbull-dor',2001);
console.log('Book:',Book);
*/

//Whrite function create(title, author,years)cunstructor..this example form Class

class CreateBooks{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
}

const Book1 = new CreateBooks('rich-dad & poor-dad','xyz',1999);
const Book2 = new CreateBooks('FSD','Mehfooz-khan',2000)
console.log('Book:',Book1);
console.log('Book2:',Book2);

