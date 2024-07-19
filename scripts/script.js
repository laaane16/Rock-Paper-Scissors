(function(){
    class Game{

        constructor(name, gameLogic){
            this.name = name;
            this.gameLogic = gameLogic;
        }

    }

    function getComputerChoice(){
        return Math.floor(Math.random() * 3);
    }

    function gameLogic(fn){
        if (fn() == 1){}
    }

    class Moves{

        constructor(...arg){
            this.moves = [arg] 
        }

    }

    let rockPaperScissors = new Game('ROCK-PAPER-SCISSORS', gameLogic(getComputerChoice))

    let movesForRPS = new Moves('paper', 'scissors', 'rock');

    console.log(movesForRPS.moves)
    addEventListener('DOMContentLoaded', function(){

    })
})()