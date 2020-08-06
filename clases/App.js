const JsonModel = require("./JsonModel");
const Car = require("./Car");
const Motorcycle = require("./Motorcycle");

class App {
  constructor(fileName) {
    this.content = new JsonModel(fileName).readFile();
    this.vehicles = [];
    this.getAll();
  }

  getAll() {
    this.content.forEach((element) => {
      if (element.hasOwnProperty("doors"))
        this.vehicles = [
          ...this.vehicles,
          new Car(element.brand, element.model, element.price, element.doors),
        ];
      else
        this.vehicles = [
          ...this.vehicles,
          new Motorcycle(
            element.brand,
            element.model,
            element.price,
            element.cylinder
          ),
        ];
    });
  }

  showAll() {
    this.vehicles.forEach((e) => console.log(e.sentence()));
  }

  getMostExpensive() {
    let maxPrice = Math.max.apply(
      Math,
      this.vehicles.map(function (e) {
        return e.price;
      })
    );

    let vehicle = this.vehicles.find((e) => e.price == maxPrice);

    return `Vehículo más caro: ${vehicle.brand} ${vehicle.model}`;
  }

  getMostCheap() {
    let maxPrice = Math.min.apply(
      Math,
      this.vehicles.map(function (e) {
        return e.price;
      })
    );

    let vehicle = this.vehicles.find((e) => e.price == maxPrice);

    return `Vehículo más barato: ${vehicle.brand} ${vehicle.model}`;
  }

  containsY() {
    let vehicle = this.vehicles.find(e => e.model.includes("y") || e.model.includes("Y"));

    return `Vehículo que contiene en el modelo la letra 'Y': ${vehicle.brand} ${vehicle.model} $${vehicle.price.formatPrice()}`;
  }

  orderByPrice() {
    let orderedArray = this.vehicles.sort((a, b) => a.price > b.price ? -1 : 1);

    console.log("Vehículos ordenados por precio de mayor a menor:");
    orderedArray.forEach(e => console.log(`${e.brand} ${e.model}`));
  }
}

module.exports = App;
