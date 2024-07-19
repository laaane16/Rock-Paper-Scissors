(function(){
    class Game{

        constructor(name, gameLogic){
            this.name = name;
            this.gameLogic = gameLogic;
        }

        play(firstPlayerMove , secondPlayerMove){
            return this.gameLogic(firstPlayerMove, secondPlayerMove)
        }
    }

    class Moves{

        constructor(...arg){
            this.moves = [arg] 
        }

    }

    function getComputerChoice(moves){
        const numComputerChoice = Math.floor(Math.random() * 3);

        return moves[numComputerChoice];
    }

    function getHumanChoice(moves){
        let nameMove = prompt('Write paper, rock or scissors');
        for (let move of moves){
            if (nameMove == move.name){
                console.log(move)
                return move;
            }
        }
    }

    function gameLogic(firstPlayerMove, secondPlayerMove){

        if (firstPlayerMove.name == secondPlayerMove.name){
            return 'НИЧЬЯ'
        }

        if (firstPlayerMove.wins == secondPlayerMove.name){

            return 'Первый игрок победил!'

        }else {

            return 'Второй игрок победил!'

        }
    }

    let movesForRPS = new Moves({name:'paper', wins: 'rock'}, {name:'scissors', wins: 'paper'}, {name:'rock', wins: 'scissors'});

    let rockPaperScissors = new Game('ROCK-PAPER-SCISSORS', gameLogic);

    rockPaperScissors.play(getComputerChoice(movesForRPS.moves), getHumanChoice(movesForRPS.moves))

})()