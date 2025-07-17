let  dataBase = JSON.parse(localStorage.getItem('formData')) || []
console.log( dataBase);

function handleForm(e){
    e.preventDefault()
    let name = document.querySelector('#taskInput').value;

      let personData ={
        id:Date.now(),
        todo,
      }
      
       dataBase.push( personData)

       localStorage.setItem("formData",JSON.stringify(dataBase))
     //renderTodoList()
}
