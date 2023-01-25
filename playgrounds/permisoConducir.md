En este desafío vas a recibir un objeto car como parámetro de la función solution.

Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

# Answer 1
<code>
    function solution(car) {
        if (car.licensePlate === null || car.licensePlate === undefined) {
            car.drivingLicense = false;
        } else {
            car.drivingLicense = true;
        }
        return car;
    }
</code>