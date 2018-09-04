function mostrarPersona(nombre, apellido) {
    return 'hola ' + nombre + ' ' + apellido;
}
var usuario = mostrarPersona('joquin', 'zambada');
document.body.innerHTML = usuario;
