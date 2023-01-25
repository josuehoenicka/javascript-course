En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

# Answer 1
<code>
    function solution(arraySecreto) {
        return typeof(arraySecreto[0]) === "string";
    }
</code>

# Answer 2
<code>
    function solution(arraySecreto) {
        return(typeof arraySecreto[0] === "string"? true: false)
    }
</code>

# Answer 3
<code>
    function solution(arraySecreto) {
        if (typeof arraySecreto[0] === "string") {
            return true;
        } else {
            return false;
        }
    }
</code>
