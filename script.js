
document.addEventListener('DOMContentLoaded', () => {
    

    const titulo = document.getElementById('titulo-banco');
    const container = document.getElementById('container');
    const inputConta = document.getElementById('input-conta');
    const inputsenha = document.getElementById('input-senha');
    const btnEntrar = document.getElementById('btn-entrar');
    const mensagemAviso = document.getElementById('mensagem-aviso');

    titulo.textContent = "Banco SENAC - Acesso";
    console.log("O DOM foi carregado");
    
   
    inputConta.addEventListener('focus', () => {
        inputConta.classList.add('borda-destaque');
        mensagemAviso.textContent = "Por favor, insira sua conta.";
});

    inputConta.addEventListener('blur', () => {
        inputConta.classList.remove('borda-destaque');
        mensagemAviso.textContent = "";
    });

    inputsenha.addEventListener('focus', () => {
        inputsenha.classList.add('borda-destaque');
        mensagemAviso.textContent = "Por favor, insira sua senha.";
    });

    inputsenha.addEventListener('blur', () => {
        inputsenha.classList.remove('borda-destaque');
        mensagemAviso.textContent = "";
    });

    container.addEventListener('mouseenter', () => {
        container.classList.add('mouse-no-container');
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove('mouse-no-container');
    });
         
    function validarAcesso() {
        const conta = inputConta.value.trim();
        const senha = inputsenha.value.trim();

        if (conta !== "" && senha.length >= 5) {
            btnEntrar.classList.remove('escondido');
            mensagemAviso.textContent = "Acesso válido!";
        }
        else {
            btnEntrar.classList.add('escondido');
            mensagemAviso.textContent = "Conta ou senha inválidos.";
        }
    }

    inputConta.addEventListener('keydown', (event) => {
        console.log(`Tecla pressionada: ${event.key}`);
    });

    inputConta.addEventListener('keyup', validarAcesso);
    inputsenha.addEventListener('keyup', validarAcesso);

    btnEntrar.addEventListener('click', () => {
        const conta = inputConta.value;

        alert(`Acesso concedido para a conta: ${conta}`);
    })
});