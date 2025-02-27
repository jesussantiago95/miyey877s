document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que el formulario se envíe
  
    // Obtener valores de los inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validar usuario y contraseña (esto es un ejemplo)
    const validUsername = 'usuario';
    const validPassword = 'clave123';
  
    if (username === validUsername && password === validPassword) {
      // Login exitoso
      alert('¡Bienvenido!');
      // Redirigir a otra página o realizar alguna acción
      window.location.href = 'bienvenido.html'; // Cambia esto por la URL deseada
    } else {
      // Mostrar mensaje de error
      document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos.';
      document.getElementById('error-message').style.display = 'block';
    }
  });