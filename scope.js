const scopeGlobal = 'Public'

function functionExample() {
    let scopeLocal = 'Private';
    console.log(scopeLocal + " & " + scopeGlobal); // Private & Public
}

console.log(scopeLocal); // Error: No se ha encontrado el nombre "scopeLocal"