let dataBase = JSON.parse(localStorage.getItem("formData")) || [];

function handleForm(e) {
  e.preventDefault();
  let todoName = document.querySelector("#taskInput").value;

  let personData = {
    id: Date.now(),
    textTodo: todoName,
    isEdit: false,
    isComplete: false,
  };

  dataBase.unshift(personData);
  localStorage.setItem("formData", JSON.stringify(dataBase));
  renderTodoList();
  document.querySelector("#taskInput").value=''
}

const renderTodoList = () => {
  let todoTable = document.getElementById("todoTable");

  todoTable.innerHTML=''
  dataBase?.map((el) => {
    let div = document.createElement("div");
    let text = document.createElement("h4");
    let edits_btn = document.createElement("button");
    let delete_btn = document.createElement("button");
    let id = document.createElement("p");
    let checkBox = document.createElement("input");

    checkBox.type = "checkBox";
    text.innerText = el.textTodo;
    id.innerText = el.id;

    edits_btn.innerText = "edits";
    delete_btn.innerText = "delete";

    div.append(checkBox, id, text, edits_btn, delete_btn);
    todoTable.append(div);
  });
};

let deleteBtn = document.createElement('button');
 deleteBtn.innerText='delete';
 deleteBtn.classList='delete-btn';

 deleteBtn.addEventListener('click',function(){
  let funalData= this.arrStorage.filter((ml)=>ml.id===!el.id);
 
  arrStorage = funalData;
  localStorage.setItem('formData',JSON.stringify(arrStorage));
  appendData();
 });