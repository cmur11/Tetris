import React, {useState} from "react"

import {createStage} from '../gameHelpers';
// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris"

// Custom Hooks
import {usePlayer} from '../hooks/usePlayer';
import {useStage} from '../hooks/useStage'
//  Componets
import Stage from "./Stage"
import Display from "./Display"
import StartButton from "./StartButton"


function Tetris(){
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player,updatePlayerPos,resetPlayer] = usePlayer()
    const [stage, setStage] = useStage(player)


    console.log('re-render');

    function movePlayer(dir){
        // giving value of x+-1
        updatePlayerPos({x:dir, y:0})
    }

    function startGame(){
        // reset everything
        setStage(createStage(),
        resetPlayer())
    }

    function drop(){
        // increase value of y by 1, make player go down
        updatePlayerPos({ x:0,y:1, collided:false })
    }

    function dropPlayer(){
        drop();
    }

    function move({keyCode}){
        if (!gameOver){
            if(keyCode == 37){
                // 37 is keycode for left arrow
                movePlayer(-1)
            } else if(keyCode === 39){
                // 39 keycode for right arrow
                movePlayer(1)
            }else if(keyCode === 40){
                // downarrow
                dropPlayer()
            }
        }
    }

    return(
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
            <StyledTetris>
                
            <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over"/>
                    ): (
                        <div>
                    <Display text="Score" />
                    <Display text="Rows" />
                    <Display text="Level" />
                    </div>
                        )}
                    <StartButton onClick={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}


export default Tetris;