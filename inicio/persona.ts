function mostrarPersona(nombre: string, apellido: string) {
  return 'usuario: ' + nombre + ' ' + apellido;
}

let usuario = mostrarPersona('joquin', 'zambada');

document.body.innerHTML = usuario;