function getPersona(nombre: string, apellido: string): string {
  return 'Persona:' + nombre + ' ' + apellido;
}

let persona = getPersona('joaquin', 'none');

console.log(persona);