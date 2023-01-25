let frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];

console.log(frutas) // (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']
console.log(frutas.length); // 4
console.log(frutas[2]); // Cereza

frutas.push("Limon"); // (5) ['Manzana', 'Plátano', 'Cereza', 'Fresa', 'Limon']
frutas.pop(); // (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']
frutas.unshift("Pera"); // (5) ['Pera', 'Manzana', 'Plátano', 'Cereza', 'Fresa']
frutas.shift(); // (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']
frutas.indexOf("Plátano"); // 1