
const loginForm = document.getElementById("cadastrar-aparelho-form");
const cadastrarButton = document.getElementById("btn-cadastrar-aparelho")
const cancelarButton = document.getElementById("btn-cancelar")

function Cadastrar(data){
    fetch('https://ooda.azurewebsites.net/Aparelho/CadastrarAparelho', {
        method: "POST",
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
  }

  cadastrarButton.addEventListener("click", (e) => {
    e.preventDefault();
    const nome_usuario = loginForm.nome_usuario.value;
    const formato = loginForm.flexRadioDefault.value;
    const data = {"nome": nome_usuario, "formato": formato}
    Cadastrar(data);
    //if (Autenticar(data) == 200){
    //    alert("You have successfully logged in.");
    //    window.location.href="../index.html";
    //}
    
})

cancelarButton.addEventListener("click", (e) => {
  e.preventDefault();
    loginForm.nome_usuario.value = "";
    loginForm.indent_usuario.value = "";
})