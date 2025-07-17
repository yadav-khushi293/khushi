/*let  dataBase = JSON.parse(localStorage.getItem('formData')) || [] //->josn->object->parse
console.log( dataBase);

function formFunctions(e){
    e.preventDefault()
    let name = document.querySelector('#userName').value;
     let email = document.querySelector('#userEmail').value;
      let pass = document.querySelector('#userPass').value;

      let personData ={
        id:Date.now(),
        name,
        email,
        pass,
      }
      
       dataBase.push( personData)

       localStorage.setItem("formData",JSON.stringify(dataBase))//object to json ->stringfy
       UI()
}

//creat data section

function UI(){        
  const mainDiv= document.querySelector("#infotable");
    mainDiv.innerHTML=''

    let table=document.createElement('table');
    let tHead = document.createElement('thead');
    let tbody= document.createElement('tbody')
    let tr = document.createElement('tr')
    let th1 =document.createElement("th");
     let th2 =document.createElement("th");
     let th3 =document.createElement("th");
    let th4 =document.createElement("th");
    let th5 =document.createElement("th");
    let th6 =document.createElement("th");

    th1.innerText='s.no';
     th2.innerText='id';
      th3.innerText='name';
       th4.innerText='email';
        th5.innerText='pass';
         th6.innerText='buttons';
     

            dataBase?.map((el,i)=>{
            let tr2= document.createElement('tr')
            let td1=document.createElement("td");
            let td2=document.createElement("td");
            let td3=document.createElement("td");
            let td4=document.createElement("td");
            let td5=document.createElement("td");
            let td6=document.createElement("td");
            let editBtn = document.createElement('button');
            let deleteBtn=document.createElement('button');

            td1.innerText=i+1;
            td2.innerText=el.id;
            td3.innerText=el.name;
            td4.innerText=el.email;
            td5.innerText=el.pass;
            editBtn.innerText='edit';
            deleteBtn.innerText='delete';

             td6.className='tablebutton';

            td6.append(editBtn,deleteBtn);
            tr.append(th1,th2,th3,th4,th5,th6);
            tHead.append(tr);
            tr2.append(td1,td2,td3,td4,td4,td5, td6);
            tbody.append(tr2);
            table.append(tHead,tbody);
            mainDiv.append(table)
         })

}
*/

let dataBase = JSON.parse(localStorage.getItem("formData")) || []; // json to object => parse
let editIndex = null;
console.log(dataBase);

function formFunctions(e) {
  e.preventDefault();

  let name = document.querySelector("#userName").value;
  let email = document.querySelector("#userEmail").value;
  let pass = document.querySelector("#userPass").value;

  if (editIndex !== null) {
    // Update existing record
    dataBase[editIndex] = {
      ...dataBase[editIndex],
      name,
      email,
      pass,
    };
    editIndex = null;
  } else {
    let personData = {
      id: Date.now(),
      name,
      email,
      pass,
    };
    dataBase.push(personData);
  }
  localStorage.setItem("formData", JSON.stringify(dataBase)); // object to json => stringify
  document.querySelector("form").reset();
  UI();
}

function UI() {
  const mainDiv = document.querySelector("#infotable");
  mainDiv.innerHTML="";

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  let th2 = document.createElement("th");
  let th3 = document.createElement("th");
  let th4 = document.createElement("th");
  let th5 = document.createElement("th");
  let th6 = document.createElement("th");

  th1.innerText = "s.no";
  th2.innerText = "id";
  th3.innerText = "name";
  th4.innerText = "email";
  th5.innerText = "pass";
  th6.innerText = "buttons";

  dataBase.map((el, i) => {
    // Creating Table Data

    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let editButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    td1.innerText = i + 1;
    td2.innerText = el.id;
    td3.innerText = el.name;
    td4.innerText = el.email;
    td5.innerText = el.pass;
    editButton.innerText ="edit";
    deleteButton.innerText = "Delete";

    /*editButton.addEventListener("click", function () {
      editUser(i);
    });*/
    editButton.onclick = () => editUser(i);
    deleteButton.onclick = () => deleteUser(i);

    tr.append(th1, th2, th3, th4, th5, th6);
    thead.append(tr);
    tr2.append(td1, td2, td3, td4, td5, editButton, deleteButton);
    tbody.append(tr2);
    table.append(thead, tbody);

    mainDiv.append(table);
  });
}

// Delete Function
function deleteUser(index) {
  if (confirm("Are you sure you want to delete this entry?")) {
    dataBase.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(dataBase));
    UI();
  }
}

// Edit Function
function editUser(index) {
  const user = dataBase[index];
  document.querySelector("#userName").value = user.name;
  document.querySelector("#userEmail").value = user.email;
  document.querySelector("#userPass").value = user.pass;
  editIndex = index;
}
