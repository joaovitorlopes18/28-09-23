document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenha os valores dos campos de entrada
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifique se as credenciais são válidas (exemplo)
    if (username === 'joao' && password === '1234') {
        alert('Login bem-sucedido!');
        // Redirecione ou execute outra ação após o login
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
    
    window.href="http://127.0.0.1:5500/sorteio.html";

    
});
