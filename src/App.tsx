import Background from 'components/Background';
import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {ThemeProvider} from 'styled-components';
import './i18n';
import './App.css';
import Home from 'routes/home'
import Nav from 'components/Nav';
import {theme} from 'data/theme';

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Nav/>
                <Background/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </ThemeProvider>
        </div>
    );
}

export default App;
