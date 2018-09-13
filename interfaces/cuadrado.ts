interface configCuadro {
  color: string,
  width?: number
};


function crearCuadrado(config: configCuadro): { color: string, area: number} {
  let nuevo = { color: 'white', area: 100 };
  if(config.color) {
    nuevo.color = config.color;
  }
  if(config.width) {
    nuevo.area = config.width * config.width;
  }
  return nuevo;
}

let cuadrado = crearCuadrado({ color:'rojo'});

console.log(cuadrado);