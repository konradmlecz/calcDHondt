import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';


const LinkStyled = styled(Link)`
  font-size: 1.2rem;
  font-weight: 600;
  text-decoration: none;
  color: ${props => props.theme.color.first};
  padding: 10px;

  &:hover {
    color: ${props => props.theme.color.second};
    border-bottom: 1px solid ${props => props.theme.color.second};
    border-top: 1px solid transparent;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
const NavStyled = styled.nav`
  color: ${props => props.theme.color.first};
  font-family: ${props => props.theme.fontFamily.first};
  position: absolute;
  margin: 0 auto;
  top: 0;
  width: 100%;
  max-width: 1200px;
  height: 38px;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.color.first};

  & button {
    color: ${props => props.theme.color.first};
    font-size: 1.2rem;
    font-weight: 600;
    padding-right: 15px;
    background: none;
    font-family: ${props => props.theme.fontFamily.first};
    border: none;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.color.second};
    }
  }

  @media (min-width: 768px) {
    height: 40px;
    & button {
      font-size: 1.4rem;
    }
  }
`;


export default function Nav() {
    const {t, i18n} = useTranslation();
    const setLanguage = (ln: string) => (ln === "en" ? "pl" : "en")

    function handleLanguage() {
        i18n.changeLanguage(setLanguage(i18n.language))
    }

    return (
        <NavStyled>
            <LinkStyled to="./">{t("nav.link1")}</LinkStyled>
            <LinkStyled to="./calc">{t("nav.link2")}</LinkStyled>
            <div/>
            <button onClick={handleLanguage}>{setLanguage(i18n.language)}</button>
        </NavStyled>
    );
}



