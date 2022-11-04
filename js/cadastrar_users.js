//Ações da página cadastrar usuário

const cadastrarForm = document.getElementById("cadastrar-usuario-form")
const cadastrarUsuarioButton = document.getElementById("cadastrar-usuario")
const limparCadForm = document.getElementById("limpar-cad_form")


function Cadastrar(data){
  fetch('https://ooda.azurewebsites.net/Usuario/Cadastrar', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(
      response =>{ 
        response.json();
        if(response.status == 200){
          alert("Usuário Cadastrado com Sucesso!!");
          window.location.href="../pages/login.html";
        }
      })
    .then(json => console.log(json))
    .catch(
      err =>console.log(err)
    )
}

cadastrarUsuarioButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = cadastrarForm.nome_usuario.value;
  const email = cadastrarForm.email.value;
  const password = cadastrarForm.senha.value;
  const data = { "nome": username, "email": email, "senha": password }
  
  Cadastrar(data);

  //if (Cadastrar(data) == 200){
  //    alert("You have successfully logged in.");
  //    window.location.href="../index.html";
  //}
})


limparCadForm.addEventListener("click", (e) => {
  e.preventDefault();
    cadastrarForm.nome_usuario.value = "";
    cadastrarForm.email.value = "";
    cadastrarForm.senha.value = "";
})



