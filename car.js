class Car {
    constructor(id, brand, model, year, available = true) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.available = available;
    }
}

module.exports = Car;
