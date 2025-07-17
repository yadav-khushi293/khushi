let  arrStorage = JSON.parse(localStorage.getItem('todos')) || [];

const myToodos = ()=>{
    const todoVal = document.querySelector('#todos').value;
    alert('please fill the text...');
    return;
}
//document's {(set)}
let data = {
    id:Math.random().toString(36).substring(2,15),
    todoText:todoVal,
    isCompleted:false,
    isEdits:false,
};
arrStorage.unshift(data);
localStorage.setItem('Todos',JSON.stringify(arrStorage));
appendData();
alert('your data has been add in to ls...');
document.querySelector('#todos').value='';

const appendData = ()=>{
    const dataInfo=document.querySelector('#dataInfo');

    dataInfo.innerHTML='';

    if(arrStorage.length==0){
        let notify = document.createElement('h1');
         notify.innerHTML="you dont have data..."
         dataTnfo.append(notify);
        }

        arrStorage && arrStorage.forEach(element => {
            
        });
}

