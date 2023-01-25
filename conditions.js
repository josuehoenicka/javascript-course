const op1 = "Piedra";
const op2 = "Papel";
const op3 = "Tijera";

const resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("User Wins!")
        }else if(user === op2 && cpu === op1){
            console.log("User Wins!")
        }else if(user === op3 && cpu === op2){
            console.log("User Wins!")
        }else{
            console.log("CPU Wins!")
        }
    }else if(user === cpu){
        console.log("DRAW!")
    }
};

resultado(op1,op3)