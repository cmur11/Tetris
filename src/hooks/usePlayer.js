import {useState} from 'react';

import {randomTetromino} from '../tetrominos'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        // default properties
        pos: {x:0, y:0},
        // initial position of 0,0
        tetromino: randomTetromino().shape,
        // getting random tetromino shape
        collided: false,
    });

    return[player];
}