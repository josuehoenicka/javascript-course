En este desafío tu función solution recibirá 2 parámetros:

1) estudiantes: un array de strings con varios nombres de estudiantes.
2) deathCount: un número entero.
3) nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
4) Tu función debe retornar un array de elementos con las siguientes indicaciones:
5) Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.
6) Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes pero eliminando de atrás para adelante a la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

# Answer 1
<code>
    function solution(estudiantes, deathCount, nuevo) {  
        if (deathCount === 0) {
                estudiantes.push(nuevo);
                return estudiantes;
        } if (deathCount > 0) {
            for (let i = 0; i < deathCount; i++) {
                estudiantes.pop();
            }
            estudiantes.push(nuevo);
                return estudiantes;
        }
    }
</code>
