const api_url = 
      "https://ooda.azurewebsites.net/Aparelho/AparelhoPorUsuario";
  
// Defining async function
async function getapi(url) {
  console.log('teste')
  const response = await fetch(
  api_url, 
  {
    method: "GET",
          headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization":"Bearer " + localStorage.getItem('token')
          }
  }
);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  
  const info2 = data.data[0].usuario;
  const info3 = data.data[0].nome;
  const info4 = data.data[0].formato;

  const tbl = document.getElementById("myTable");
  const tblBody = document.getElementById("add_info");

  // creating all cells
  for (let i = 0; i < data.data.length; i++) {
    // creates a table row
    const row = document.createElement("tr");
    
    for (let j = 0; j < 1; j++) {
      
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell1 = document.createElement("td");
      
      const cell4 = document.createElement("td");
      const cellText1 = document.createTextNode(data.data[i].codigo);
      
      const cellText4 = document.createTextNode(data.data[i].formato);
      cell1.appendChild(cellText1);
 
      cell4.appendChild(cellText4);
      row.appendChild(cell1);
    
      row.appendChild(cell4);

    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  
}
 

/**const url = 'https://ooda.azurewebsites.net/Aparelho/AparelhoPorUsuario';

fetch (url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let authors = data;
    })


function Cadastrar(data){
    fetch('https://ooda.azurewebsites.net/Aparelho/AparelhoPorUsuario', {
        method: "GET",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(
        response =>{ 
          response.json();
          if(response.status == 200){
            alert("Aparelho Cadastrado com Sucesso!!");
            //window.location.href="../pages/login.html";
          } else{
            alert("Falha no Cadastrado do Aparelho!!");
          }
        })
      .then(json => console.log(json))
      .catch(
        err =>console.log(err)
      )
  }**/