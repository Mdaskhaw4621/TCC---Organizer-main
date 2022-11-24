
//Ações da página de login

function Autenticar(data){
    fetch('https://ooda.azurewebsites.net/Usuario/Autenticar', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(
        response =>{ 
          response.json();
          if(response.status == 200){
            alert("You have successfully logged in.");
            window.location.href="pages/home.html";
            
            }
        })
      .then(json => { 
          console.log(json);
            
               var myContent = json.text();
              localStorage.setItem("myContent", myContent);
              console.log(localStorage.getItem("myContent"));
    })
      .catch(
        err =>console.log(err)
      )
}


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const cadastrarRedirectButton = document.getElementById("cadastrar-usuario");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.senha.value;
    const data = {"login": email, "senha": password}
    Autenticar(data);
    //if (Autenticar(data) == 200){
    //    alert("You have successfully logged in.");
    //    window.location.href="../index.html";
    //}
})

cadastrarRedirectButton.addEventListener("click", (e) => {
  e.preventDefault();
    window.location.href="pages/cadastrar_users.html";
})




