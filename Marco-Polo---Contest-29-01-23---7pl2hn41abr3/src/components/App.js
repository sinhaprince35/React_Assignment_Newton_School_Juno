import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [text,setText]=useState('Marco')
  const [btnName,setBtnName]=useState('Polo')
  const [flag,setFlag]=useState(true);
  function toggle(){
    if(flag){
        setFlag(false);
        setBtnName('Marco');
        setText('Polo');
    }else{
        setFlag(true);
        setBtnName('Polo');
        setText('Marco');
    }
  }
  return (
    <div id="main">
    <h1 id='marco-polo'>{text}</h1>
    <button id='marco-polo-toggler' onClick={toggle}>{btnName}</button>
    </div>
  )
}


export default App;