import Background from 'components/Background';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components';
import './i18n';
import './App.css';
import Home from 'routes/home'
import Calc from 'routes/calc'
import Nav from 'components/Nav';
import {theme} from 'data/theme';

export const MainWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px)
`;

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Nav/>
                <Background/>
                <MainWrapper>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/calc" element={<Calc/>}/>
                    </Routes>
                </MainWrapper>
            </ThemeProvider>
        </div>
    );
}

export default App;
