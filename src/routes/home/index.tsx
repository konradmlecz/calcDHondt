import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next'
import {ContainerContentStyled} from 'components/ContainerContentStyled'
import {useNavigate} from 'react-router-dom';
import Button from 'components/Button'

export const HomeStyled = styled(ContainerContentStyled)`
  
  & h1 {
    padding: 10px;
    letter-spacing: 4px;
    border-bottom: 1px solid ${props => props.theme.color.first};
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    & h1 {
      padding: 20px;
      letter-spacing: 8px;
      font-size: 3rem;
    }
  }
`;


export default function Home() {
    const {t} = useTranslation();
    const handleClick = () => {
        navigate('/calc')
    }
    const navigate = useNavigate()
    return (
        <HomeStyled>
            <h1>{t('home.title')}</h1>
            <Button onClick={handleClick}>{t('home.button')}</Button>
        </HomeStyled>
    );
}

