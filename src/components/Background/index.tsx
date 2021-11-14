import React from 'react';
import styled from 'styled-components';
import {ReactSVG} from 'react-svg'

const BackgroundStyled = styled.div`
  background-color: ${props => props.theme.color.third};
  z-index: -1;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
      opacity: 0.5;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 65%;
    }
  }
`;


export default function Background() {
    return (
        <BackgroundStyled>
            <ReactSVG
                src="./images/box.svg"
            />
        </BackgroundStyled>
    );
}



