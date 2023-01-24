/* En este desafío vas a recibir un parámetro secreto en la función solution. 
Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual */

// Answer #1
function solution(secreto) {
    return secreto > 5
}

// Answer #2 
function solution(secreto) {
    return !(secreto <= 5);
}

// Answer #3 
function solution(secreto) {
    return secreto > 5 ? true : false
}

// Answer #4
export function solution(secreto) {
    if (secreto > 5) {
      return true;
    } else {
      return false;
    }
}

// Answer #5 
export function solution(secreto) {
    if (secreto < 6) {
      return false;
    } else {
        return true;  
      }
}