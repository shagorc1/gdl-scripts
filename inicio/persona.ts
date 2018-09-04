function mostrarPersona(nombre: string, apellido: string) {
  return 'hola ' + nombre + ' ' + apellido;
}

let usuario = mostrarPersona('joquin', 'zambada');

document.body.innerHTML = usuario;