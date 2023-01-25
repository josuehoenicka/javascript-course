let articulos = [
    {
        nombre: "Bici",
        precio: 20000
    },
    {
        nombre: "Tv",
        precio: 150000
    },
    {
        nombre: "Libro",    
        precio: 300
    },
    {
        nombre: "Celu",
        precio: 50000
    },
    {
        nombre: "Laptop",
        precio: 100000
    }
]

let arrayFilter = articulos.filter(function(articulo){
    return articulo.precio < 50000;
});

let arrayMap = articulos.map(function(articulo){
    return articulo.nombre;
});

let arrayFind = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

let arrayForEach = articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

let arraySome = articulos.some(function(articulo){
    return articulo.precio > 50000;
});

arrayFilter; // (2) 0: {nombre: 'Bici', precio: 20000}, 1: {nombre: 'Libro', precio: 300}
arrayMap;  // (5) ['Bici', 'Tv', 'Libro', 'Celu', 'Laptop']
arrayFind; // {nombre: 'Laptop', precio: 100000}
arrayForEach; // Bici, Tv, Libro, Celu, Laptop
arraySome; // true