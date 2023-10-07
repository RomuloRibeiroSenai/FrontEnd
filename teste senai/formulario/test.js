function verifica(){
    var senha = document.getElementById('Senha').value;
    var confimacao = document.getElementById('CSenha').value;

    if (senha !== confimacao) {
        alert("Senhas diferentes");
        
    }
};

