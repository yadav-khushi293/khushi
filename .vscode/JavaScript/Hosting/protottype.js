//push

Array.prototype.lastadd=function(value){
    let index = this.length;
    this[index]=value;
};
Array.lastadd();
console.log(array);


//pop
Array.prototype.lastpop=function(){
    let index =this.length-1;
    delete this[index];
    this.length=index;
};
array.lastpop();
console.log(array);

//unshift

Array.prototype.fistadd=function(...values){
    console.log('->values:',values);
    let newLenght =this.length + values.length;

    console.log('->newLenght:',newLenght);
    //5 ->5-1=4
    
    //shift existing elements to the right

    for(let i =newLenght-1; i>=values.length; i--){
        this[i] = values[i];
    }

    for(let i=0; i<values.length;i++){
        this[i]=values[i];
    }

   return this.length;
};
