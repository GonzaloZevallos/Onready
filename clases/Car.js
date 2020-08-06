const Vehicle = require('./Vehicle');

class Car extends Vehicle {
  constructor(brand, model, price, doors) {
    super(brand, model, price);
    this.doors = doors;
  }

  sentence() {
    return `Marca: ${this.brand} // Modelo: ${this.model} // Puertas: ${this.doors} // Precio: ${this.price.formatPrice()}`;
  }
}

module.exports = Car;