
function rollDice(){

     const numofdice = document.getElementById("numofdice").value;
     const diceresult = document.getElementById("diceresult");
     const diceimage = document.getElementById("diceImage");
     const values = [] ;
     const image = [];

   for(let i = 0 ; i < numofdice; i++){
       const value = Math.floor(Math.random() * 6) + 1;
       values.push(value);
       image.push(`<img src = "Dice_pic/${value}.png">`);
   }
   diceresult.textContent = `dice: ${values.join(', ')}`;
   diceimage.innerHTML = image.join('')

}