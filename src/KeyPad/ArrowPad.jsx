import React, { useState } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    background: #D2E6A6;
    padding: 1rem;
    border: 1px dashed #759682;
    &:focus {
        border-style: solid;
    }

`

const Span = styled.span`
    color: #759682;
    font-weight: 700;
    font-size: 3em;
`

const ArrowPad = ({matcher}) => {

    const [value, setValue] = useState('')

    const keyMap = {
        37: '←',
        38: '↑',
        39: '→',
        40: '↓'
    }

    const captureKey = (e) => {
        const keyCode = e.keyCode;
        const key = keyMap[keyCode];
        if (key) {
            setValue(prevState => {
                if (prevState.length >= 5) {
                    return '';
                } else {
                    const newString = prevState + key;
                    console.log(matcher)
                    if (newString === matcher) {
                        throw new Error('You Matched Oops')
                    }
                    return newString
                }
            });
        }
    }
    
    return (
        <Wrapper tabIndex="1" onKeyDown={captureKey}>
            <Span>{value}</Span> 
        </Wrapper>
    )
}

export default ArrowPad;