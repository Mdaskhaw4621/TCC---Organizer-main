
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
          }
        })
      .then(json => console.log(json))
      .catch(
        alert("Falha no Cadastrado do Aparelho!!"),
        err =>console.log(err)
      )
  }

  cadastrarButton.addEventListener("click", (e) => {
    e.preventDefault();
    const id_usuario = Number.parseInt(loginForm.indent_usuario.value);
    const nome_usuario = loginForm.nome_usuario.value;
    const formato = loginForm.flexRadioDefault.value;
    const data = {"idUsuario": id_usuario, "nome": nome_usuario, "formato": formato}
    Cadastrar(data);
    //if (Autenticar(data) == 200){
    //    alert("You have successfully logged in.");
    //    window.location.href="../index.html";
    //}
})