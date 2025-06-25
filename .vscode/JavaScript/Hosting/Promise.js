//promise took callback function and also took(resolve,reject)
//this ex without deleytime//1:exmaple
/*let ice_cream = new Promise((res,rej)=>{
  let got_ice_cream = true;
  if(got_ice_cream) res(got_ice_cream);
  else rej(got_ice_cream); 

});// hrer is created new promises


ice_cream.then(()=>{
 console.log('eat ice cream');
});

ice_cream.catch(()=>{
 console.log('call mommy');
});
*/



/*
//!what  if we get delay to get the response
//2:exmple

let ice_cream = new Promise((res,rej)=>{

    let got_ice_cream;
    
    retTimeout(()=>{
        got_ice_cream=false;
        if(got_ice_cream){
            res('eat ice cream');

        }else {
          rej('call mom');
        }
        },3000);
});

ice_cream
.then(()=>{
    console.log('eat ice cream');
})

.catch(()=>{
    console.log('call mommy');
});

*/


//REAL CODE

//code-1
function appends(s){

    let Script = document.createElement('script');
    Script.src =s;
    document.head.append(Script);

    setTimeout(()=>{
      hello();
    },3000);
}

appends('./myScript.js');


//code-2

function appends(s){
    return new Promise((res, rej)=>{
     let script = document.createElement('script');

     Script.src = s;

     document.head.append(script);

     Script.onload = function(){
        res('Script loadind done');
     };

     script.onerror = function(){
        res('Not Loaded');
     };
    });
}

appends('./myScript.js')

.then((res)=>{
    console.log(res);
    hello();
})

.catch((err)=>{
    console.log(err,'->this is error');
});


//CODE-3

function appends(s){
    return new Promise((res, rej)=>{
     let script = document.createElement('script');

     Script.src = s;

     document.head.append(script);

     Script.onload = function(){
        res('Script loadind done');
     };

     script.onerror = function(){
        res('Not Loaded');
     };
    });
}

async function handle() {
   
     try{
       let res = await appends('./myScript.js');
      console.log(res);
      hello();

     }catch(err){
        console.log(err);
     }
}
