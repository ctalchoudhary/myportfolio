import './App.css';
import React, { useState } from 'react';
import Navigation from './components/navigation.js';
import Home from './components/home.js';
import About from './components/about.js';
import Footer from './components/footer.js';
import Alert from './components/alert.js';

function App() {
  const[mode, setMode] = useState('dark');
  const[switchText, setswitchText] = useState('light');
  const[backcolor, setBackcolor] = useState('#ffc000');
  const[alert, setAlert] = useState(null);
  const toggleMode =()=>{
    if(mode == 'dark'){
      setMode('light');
      setswitchText('dark');
      setBackcolor('rgb(72 62 62 / 17%)');
    }
    else{
      setMode('dark');
      setswitchText('light');
      setBackcolor('#ffc000');
    }
    
  }
  const showAtlert = (message, type) => {
    setAlert({
           message:message,
           type:type
    })
  }
  return (
    <div className="App" style={{background: backcolor}}>
      <Navigation mode={mode} toggleMode ={toggleMode} switchText ={switchText}/>
      <Alert alert={alert}/>
      <Home />
      <About showAtlert ={showAtlert} setAlert={setAlert}/>
      <Footer text="Created by Sheetal Choudhary" mode={mode} switchText ={switchText}/>
    </div>
  );
}

export default App;
