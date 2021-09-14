import React from "react"
import {StyledCell} from './styles/StyledCell'
import {TETROMINOS} from '../tetrominos'

function Cell({type}){

    return(
        // get color from TETROMINOS per shape, getting color proprerty
    <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
    )


}

export default Cell;