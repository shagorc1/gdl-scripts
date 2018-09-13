var Persona = /** @class */ (function () {
    function Persona(name) {
        this.nombre = name;
    }
    Persona.prototype.nombreCompleto = function () {
        return 'Juan ' + this.nombre;
    };
    return Persona;
}());
var persona = new Persona('Perez');
console.log(persona.nombreCompleto());
