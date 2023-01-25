En este desafío vas a recibir un parámetro secreto en la función solution  Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual

# Answer 1
<code>
  function solution(secreto) {
      return secreto > 5
  }
</code>

# Answer 2
<code>
function solution(secreto) {
    return !(secreto <= 5);
}
</code>

# Answer 3
<code>
function solution(secreto) {
    return secreto > 5 ? true : false
}
</code>

# Answer 4
<code>
export function solution(secreto) {
    if (secreto > 5) {
      return true;
    } else {
      return false;
    }
}
</code>

# Answer 5
<code> 
export function solution(secreto) {
    if (secreto < 6) {
      return false;
    } else {
        return true;  
      }
}
</code>