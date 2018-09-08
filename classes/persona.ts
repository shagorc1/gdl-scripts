class Persona {
  nombre: string;
  constructor(name: string) {
    this.nombre = name;
  }
  nombreCompleto() {
    return 'Persona:' + this.nombre;
  }
}
let jose = new Persona('jose jose');

document.body.innerHTML = jose.nombreCompleto();