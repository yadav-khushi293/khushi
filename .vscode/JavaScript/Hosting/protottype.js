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


//shift

Array.prototype.firstremove=function(){
    if(this.length===0)
        return undefined;

    const fistElement=this[0];
    //store a first  element array

    for(let i=1; i<=this.length; 1++){
        this[i-1]=this[i];
    }
   //shift element in left
   
    this.length=this.length-1;

    return fistElement;
}