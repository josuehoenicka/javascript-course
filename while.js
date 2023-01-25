const estudiantes = ["Josue", "Alexander", "Joana", "Ernesto", "Adolfo"];

function saludarEstudiantes() {
    while(estudiantes.length > 0) {
        console.log('(Lista de espera para el saludo: ' + estudiantes + ')')
        let estudiantePrincipal = estudiantes.shift();
        console.log('Hola, cómo estás ' + estudiantePrincipal + ' ?');
    }
}
