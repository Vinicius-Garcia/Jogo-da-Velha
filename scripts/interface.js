document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    butt.addEventListener('click',clicou);
    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
    

})
function clicou(event){
    let bot = butt.id;
    reset(bot);
    updateSquares();
}

function handleClick(event) {
    
    
    let square = event.target;
    let postion = square.id;

    
    if(handleMove()){

    }
    if (handleMove(postion)) {

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
            updateSquares();
        }, 10);

    };
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = '';
    })

}
