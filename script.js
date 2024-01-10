let X_turn = true;
const winning_combinations=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

   let x = document.querySelectorAll(".boxes");
   x.forEach((boxes) =>{
    boxes.addEventListener("click", () => {
    console.log("box was clicked");
    if(X_turn === true){
      boxes.innerText = "X";
      X_turn = false;
    }else{
        boxes.innerText = "O";
        X_turn = true;
    }
    boxes.disabled = true;

    if(winning_combinations() === true && boxes.innerText == "X"){
        document.getElementById('won').innerHTML = "Player having X turn WON!";
        
    }
    else if(winning_combinations() === true && boxes.innerText == "O"){
        document.getElementById('won').innerHTML = "Player having O turn WON!";

    }
    else if(winning_combinations() === false){
        document.getElementById('won').innerHTML = "NO team has WON!"
    }
    })
   })

