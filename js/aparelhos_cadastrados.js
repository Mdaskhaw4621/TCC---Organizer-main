const api_url = 
      "https://ooda.azurewebsites.net/Aparelho/NotificacaoUsuario";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
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
  let tab = 
  `<tr>
    <th>Codigo</th>
    <th>Formato</th>
    <th>Usuario</th>
   </tr>`;
 },
// Loop to access all rows 
for (let r of data.list) {
  tab += `<tr> 
<td>${r.codigo} </td>
<td>${r.formato}</td>
<td>${r.usuario}: null,
}</td> 
       
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("info_table").innerHTML = tab;
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