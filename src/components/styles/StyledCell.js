import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    // grabbing color from props in Cell, which is receiving it from Tetrominos
    background: rgba(${props => props.color}, 0.8);
    // if there is no Tetrominos in this specific cell, no border, else  set it to 4px solid
    border: ${props => (props.type === 0 ? '0px solid': '4px solid')};
    // different alpha provides shadow effect on blocks, diff opacity on blocks
    border-bottom-color: rgba(${props => props.color}, 0.1);
    border-right-color: rgba(${props => props.color}, 1);
    border-left-color: rgba(${props => props.color}, 1);
    border-top-color: rgba(${props => props.color}, 0.3);

`