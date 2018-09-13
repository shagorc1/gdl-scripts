class Persona {
  nombre: string;
  constructor(name: string) {
    this.nombre = name;
  }
  nombreCompleto(): string {
    return 'Juan ' + this.nombre;
  }
}

let persona = new Persona('Perez');
console.log(persona.nombreCompleto());
