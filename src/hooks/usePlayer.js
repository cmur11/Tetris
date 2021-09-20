import {useState, useCallback} from 'react';

import {randomTetromino} from '../tetrominos'
import {STAGE_WIDTH} from '../gameHelpers'
export const usePlayer = () => {
    const [player, setPlayer] = useState({
        // default properties
        pos: {x:0, y:0},
        // initial position of 0,0
        tetromino: randomTetromino().shape,
        // getting random tetromino shape
        collided: false,
    });

    const updatePlayerPos = ({x,y,collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    
        const resetPlayer = useCallback(() =>{
            setPlayer({
                pox: {x: STAGE_WIDTH /2 - 2, y: 0},
                tetromino: randomTetromino().shape,
                collided: false
            })
        })
  
    return[player,updatePlayerPos,resetPlayer];
}