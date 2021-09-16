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