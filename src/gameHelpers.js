export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

// Nested Array, multidimesnional array

// creating an array with stage height= 20, 
// using inline funciotn that for each row, create a new array with our cells
// filling htem up with a value of 0= clean cell, 'clear' no tetrimons that have
// collided with the cell 
//  0 is nothing on the grid, 'clear' going to replaced w much, when tetrominos
export const createStage = () => {
return(
  Array.from(Array(STAGE_HEIGHT), () => {
        return new Array(STAGE_WIDTH).fill([0,'clear'])
    })
)
}

export const checkCollision = (player,stage,{x: moveX, y: moveY}) => {
    for (let y = 0; y< player.tetromino.length; y +=1 ){
        for(let x = 0; x <player.tetromino[y].length; x += 1){
            // 1. Check that we're on an actual Tetromino cell
                if (player.tetromino[y][x] !== 0){
                    // 2. Check that our move is inside the game areas heigh(y)
                    // we shouldn't go through bottom of play area

                    // 3. Check that our move is inside game areas width(x)

                    // 4. Check that the cell isn't set to clear

                }
        }
    }
}