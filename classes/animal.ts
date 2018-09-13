class Animal {
  mover(distancia: number) {
    console.log(`el animal se mueve a una distancia de ${distancia}m`);
  }
}

class Perro extends Animal {
  ladrar() {
    console.log('woof woof!');
  }
}

let chihuahua = new Perro();

chihuahua.ladrar();
chihuahua.mover(50);
chihuahua.ladrar();