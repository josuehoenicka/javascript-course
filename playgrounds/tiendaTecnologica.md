En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

1) Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript"
2) Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi"
3) Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!"
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado"

# Answer #1 
<code>
    function solution(article) {
        if (article === "computadora") {
            return "Con mi computadora puedo programar usando JavaScript";
        } if (article === "celular") {
            return "En mi celular puedo aprender usando la app de Platzi";
        } if (article === "cable") {
            return "¡Hay un cable en mi bota!";
        } else {
            return "Artículo no encontrado";
        }
    }
</code>
