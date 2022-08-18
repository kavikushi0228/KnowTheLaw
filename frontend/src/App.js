import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './Components/Headers/Header'
import MainPages from './Components/MainPages/Pages'
import './App.css';


function App() {
  return (
    <DataProvider>
      <Router>
        <div className='App'>
        <Header/>
        
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
