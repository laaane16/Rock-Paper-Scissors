
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
            this.moves = arg 
        }

    }

    function getComputerChoice(moves){
        const numComputerChoice = Math.floor(Math.random() * 3);

        return moves[numComputerChoice];
    }

    function getHumanChoice(moves){
        const nameMove = prompt('Write paper, rock or scissors');
        for (let move of moves){
            if (nameMove == move.name){
                return move;
            }
        }
    }

    function gameLogic(firstPlayerMove, secondPlayerMove){
        
        console.log(`Ход вашего противника ${firstPlayerMove.name}`)
        if (firstPlayerMove.name == secondPlayerMove.name){
            console.log('НИЧЬЯ')
        }

        else if (firstPlayerMove.wins == secondPlayerMove.name){
            console.log('Победил ваш противник')

        }else {
            console.log('Вы победили!')

        }
    }

    let movesForRPS = new Moves({name:'paper', wins: 'rock'}, {name:'scissors', wins: 'paper'}, {name:'rock', wins: 'scissors'});

    let rockPaperScissors = new Game('ROCK-PAPER-SCISSORS', gameLogic);

    rockPaperScissors.play(getComputerChoice(movesForRPS.moves), getHumanChoice(movesForRPS.moves))

})()