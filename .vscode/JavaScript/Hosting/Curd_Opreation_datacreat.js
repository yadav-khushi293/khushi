let  dataBase = JSON.parse(localStorage.getItem('formData')) || [] //->josn->object->parse
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

//creat a data section

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
     

        /* dataBase?.map((el,i)=>{
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
         })*/

            // Inside your map function in UI()
dataBase?.map((el, i) => {
    let tr2 = document.createElement('tr');
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let editBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');

    td1.innerText = i + 1;
    td2.innerText = el.id;
    td3.innerText = el.name;
    td4.innerText = el.email;
    td5.innerText = el.pass;
    editBtn.innerText = 'Edit';
    deleteBtn.innerText = 'Delete';

    td6.className = 'tablebutton';
    td6.append(editBtn, deleteBtn);

   
    if (i === 0) {
        tr.append(th1, th2, th3, th4, th5, th6);
        tHead.append(tr);
    }

    tr2.append(td1, td2, td3, td4, td5, td6);
    tbody.append(tr2);
    table.append(tHead, tbody);
    mainDiv.append(table);

    //DELETE button logic
    deleteBtn.addEventListener('click', () => {
        dataBase.splice(i, 1); // Remove from array
        localStorage.setItem("formData", JSON.stringify(dataBase)); // Save new array
        UI(); // Re-render UI
    });

    //EDIT button logic
    editBtn.addEventListener('click', () => {
        // Fill form fields with existing data
        document.querySelector('#userName').value = el.name;
        document.querySelector('#userEmail').value = el.email;
        document.querySelector('#userPass').value = el.pass;

        // Change form button text (optional)
        document.querySelector('#submitBtn').innerText = 'Update';

        // Temporarily change form submit behavior to "update"
        document.querySelector('form').onsubmit = function (e) {
            e.preventDefault();

            // Update the dataBase object
            dataBase[i].name = document.querySelector('#userName').value;
            dataBase[i].email = document.querySelector('#userEmail').value;
            dataBase[i].pass = document.querySelector('#userPass').value;

            localStorage.setItem("formData", JSON.stringify(dataBase));
            UI();

            // Reset form
            document.querySelector('form').reset();
            document.querySelector('#submitBtn').innerText = 'Submit';
            document.querySelector('form').onsubmit = formFunctions; // Rebind original
        };
    });
});



}