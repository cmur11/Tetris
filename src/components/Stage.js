import React from "react"

import Cell from "./Cell.js"

function Stage({stage}){
    
    return(
        <div>
            {/* map through stage, get row, each row is an array that has the cells,
            getting value 0- row ic elar when starting
            */}
            {stage.map(row => row.map((cell,x) => <Cell key={x} type={cell[0]} />))}
        </div>
    )

}


export default Stage;