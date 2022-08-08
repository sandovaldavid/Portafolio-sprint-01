const button_envio = document.getElementById("enviar");

button_envio.addEventListener('click' , function(e){
    e.preventDefault();
    const email = document.getElementById('email').value;
    const nombre = document.getElementById('nombre').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;
    window.location.href = `mailto:sandovaldavid2201@gmail.com?subject=${asunto}&body=Nombre%3A${nombre}%0ACorreo%3A${email}%0AMensaje%3A${mensaje}`;

});