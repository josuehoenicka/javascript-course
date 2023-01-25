const estudiantes = ["Josue", "Alexander", "Joana", "Ernesto", "Adolfo"];


function saludarEstudiantes() {
    for (let i = 0; i < estudiantes.length; i++) { 
        console.log('Hola, cómo estas ' + estudiantes[i] + ' ?');
    }
} 