import React from "react"
import {StyledCell} from './styles/StyledCell'
import {TETROMINOS} from '../tetrominos'

function Cell({type}){

    return(
        // get color from TETROMINOS per shape, getting color proprerty
    <StyledCell type={type} color={TETROMINOS[type].color}/>
    )


}

export default Cell;