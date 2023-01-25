let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto: ${this.marca}, ${this.modelo}, ${this.anio}`)
    }
}

miAuto.marca(); // Toyota
miAuto.detalleDelAuto(); // Auto: Toyota, Corolla, 2020