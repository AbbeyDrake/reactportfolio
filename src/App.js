import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Main from './components/Main';
import Home from './pages/Home';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <Home/>
    // <BrowserRouter>
    // <div className="App">
    //   <Main />
    // </div>
    // </BrowserRouter>
);
}

export default App;
