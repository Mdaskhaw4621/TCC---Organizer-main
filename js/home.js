const api_url = 
      "https://ooda.azurewebsites.net/Aparelho/NotificacaoUsuario";
  
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
    console.log(response)
    // Storing response
    // const response = await fetch(url);
    
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

    const info1 = data.data[0];
    const info2 = data.data[1];
    const info3 = data.data[2];
    const info4 = data.data[3];

    document.getElementById("info1").innerHTML = info1;
    document.getElementById("info2").innerHTML = info2;
    document.getElementById("info3").innerHTML = info3;
    document.getElementById("info4").innerHTML = info4;

    // Loop to access all rows 
   /* for (let r of data) {
        tab += `<tr> 
            <td>${r} </td>        
        </tr>`;
    }*/
    // Setting innerHTML as tab variable
    
}