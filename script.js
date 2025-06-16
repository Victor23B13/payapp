let usuario = {
    nome: "Maria",
    email: "Maria222@gmail.com",
    idade: "20",
    ativo: true,
};

function exibirUsuario() {
    document.getElementById("nome").textContent = usuario.nome
    document.getElementById("email").textContent = usuario.email
    document.getElementById("idade").textContent = usuario.idade
    document.getElementById("ativo").textContent = usuario.ativo
}

function atualizarUsuario() {
    usuario.nome = "Carlos Silva";
    usuario.email = 29;
    usuario.idade = "carlos.silva@gmail.com"; 
    usuario.ativo = false;

    exibirUsuario();
}

exibirUsuario();