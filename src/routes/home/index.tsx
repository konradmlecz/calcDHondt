import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next'

export const HomeStyled = styled.div`
  font-family: ${props => props.theme.fontFamily.first};
  color: ${props => props.theme.color.first};
  background-color: rgba(255, 255, 255, 0.6);
  padding: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  h1 {
    padding: 10px;
    letter-spacing: 4px;
    border-bottom: 1px solid ${props => props.theme.color.first};
    font-size: 1.4rem;
  }

  button {
    font-size: 1.2rem;
    margin: 4px;
    font-family: ${props => props.theme.fontFamily.first};
    background-color: transparent;
    border-radius: 15px;
    padding: 5px 10px;
    color: ${props => props.theme.color.first};
    border: 1px solid ${props => props.theme.color.first};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.color.second};
      border: 1px solid ${props => props.theme.color.second};
    }
  }

  @media (min-width: 768px) {
    padding: 20px;
    h1 {
      padding: 20px;
      letter-spacing: 8px;
      font-size: 3rem;
    }

    button {
      font-size: 1.8rem;
      margin: 10px;
      padding: 10px 20px;
    }
  }
`;


export default function Home() {
    const {t} = useTranslation();
    return (
        <HomeStyled>
            <h1>{t('home.title')}</h1>
            <button>{t('home.button')}</button>
        </HomeStyled>
    );
}

