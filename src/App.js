import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Textutil from './components/Textutil';
import About from './components/About';
import Subscribe from './components/Subscribe';
import NewsContainer from './components/NewsContainer';

function App() {
  const [mode, setMode] = useState('dark');
  const handleToggleMode = () => {
    if(mode==='dark'){
      document.body.style.backgroundColor = '#404040';
      document.body.style.color = '#ffffff';
    }
    else{
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#404040';
    }
    setMode(mode==='light'?'dark':'light');
    
  }
  return (
      <Router> 
        <Navbar title="TextUtils Chinmoy" currentMode={mode}  handleToggleMode = {handleToggleMode}/>
        <Switch>
          <Route path="/news">
            <NewsContainer />
          </Route>
          <Route path="/subscribe">
            <Subscribe />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <div className="container mt-5">
              <Textutil headerTitle = "Enter the text to see the magic" currentMode={mode}/>
            </div>
          </Route>
        </Switch>   
      </Router>      
  );
}

export default App;
