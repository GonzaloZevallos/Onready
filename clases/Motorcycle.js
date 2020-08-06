const Vehicle = require("./Vehicle");

class Motorcycle extends Vehicle {
  constructor(brand, model, price, cylinder) {
    super(brand, model, price);
    this.cylinder = cylinder;
  }
  
  sentence() {
    return `Marca: ${this.brand} // Modelo: ${this.model} // Cilindrada: ${this.cylinder} // Precio: ${this.price.formatPrice()}`;
  }
}

module.exports = Motorcycle;
