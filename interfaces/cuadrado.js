;
function crearCuadrado(config) {
    var nuevo = { color: 'white', area: 100 };
    if (config.color) {
        nuevo.color = config.color;
    }
    if (config.width) {
        nuevo.area = config.width * config.width;
    }
    return nuevo;
}
var cuadrado = crearCuadrado({ color: 'rojo' });
console.log(cuadrado);
