class Animal {
  mover(distancia: number = 0) {
    console.log(`distancia recorrida en metros ${distancia}m`);
  }
}


class Perro extends Animal {
  ladrar() {
    console.log('woff woff!');
  }
}

let chihuahua = new Perro();
chihuahua.ladrar();
chihuahua.mover(5);
chihuahua.ladrar();