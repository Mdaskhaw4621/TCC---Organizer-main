
//Ações da página de login


async function Autenticar(data) {
	const response = await fetch(
		'https://ooda.azurewebsites.net/Usuario/Autenticar', 
		{
			method: "POST",
			body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
		}
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const dataResponse = await response.json();
  window.localStorage.setItem("token", dataResponse.token)
  
  window.location.href="pages/home.html";

}



const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const cadastrarRedirectButton = document.getElementById("cadastrar-usuario");

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.senha.value;
    const data = {"login": email, "senha": password}
    await Autenticar(data);
    //if (Autenticar(data) == 200){
    //    alert("You have successfully logged in.");
    //    window.location.href="../index.html";
    //}
})

cadastrarRedirectButton.addEventListener("click", (e) => {
  e.preventDefault();
    window.location.href="pages/cadastrar_users.html";
})




