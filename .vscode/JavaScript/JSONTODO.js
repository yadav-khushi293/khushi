const api=`https://api-database-1.onrender.com/ToDo`;

async function myTodos () {
let value = document.querySelector('#todos').value;
let objectData = {
    id:crypto.randomUUID(),
    text:value,
    isEdits:false,
    isCompleted:false,
};

try{
    const res = await fetch(api,{
        method:'POST',
        body:JSON.stringify(objectData),
        headers:{
            'Content-type':'application/json',
        },
    });

    appendData();
    document.querySelector('#todos').value='';
}catch(error){
    console.log(error);
}
}

async function appendData() {
    let data;
    try {
        const res = await fetch(api);
        data = await res.json();
    }catch(error){
        console.log(error);
    }
    console.log(data);
  
    const main_div = document.querySelector('#dataInfo');
    main_div.innerHTML=''

    data.forEach(element => {
        let div= document.createElement('div');
        let id = document.createElement('id');
        let text = document.createElement('p');
        let input = document.createElement('input')
        let checkbox= document.createElement('input')

        checkbox.type='checkbox';
        checkbox.name='checkbox';

        let editBtn= document.createElement('button');
        let deleteBtn = document.createElement('button');
        
        div.append(  
            
        )
        
    });






}



