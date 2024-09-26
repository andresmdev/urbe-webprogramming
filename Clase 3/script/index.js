var students = [];

function add() {
  const name = document.getElementById("name").value;
  const id = document.getElementById("id").value;
  const sex = document.getElementById("sex").value;
  const address = document.getElementById("address").value;

  if(name === ""){
    alert("Por favor, ingrese un nombre.");
  }
  else if(id === ""){
    alert("Por favor, ingrese un ID.");
  }
  else if(sex === ""){
    alert("Por favor, ingrese un género.");
  }
  else if(address === ""){
    alert("Por favor, ingrese una dirección.");
  }
  else{
    const jsn = {
      "name": name,
      "id": id,
      "sex": sex,
      "address": address
    };

    console.log(jsn);
    students.push(jsn);
    showTable();
    clearInput();
  }
}

function showTable() {
  let output = "";

  for(let i in students){
    output += `<tr>
      <td>${students[i].name}</td>
      <td>${students[i].id}</td>
      <td>${students[i].sex}</td>
      <td>${students[i].address}</td>
      <td> 
        <button class="btn-delete" onclick="deleteStudent('${i}')">Eliminar</button> 
      </td>
    </tr>
    `;
  }
  
  console.log(students);
  document.getElementById("tbody").innerHTML = output;
}

function clearInput() {
  document.getElementById("name").value = "";
  document.getElementById("id").value = "";
  document.getElementById("sex").selectedIndex = 0;
  document.getElementById("address").value = "";
}

function deleteStudent(id) {
  console.log(id);
  students.splice(id, 1);
  showTable();
}

