import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
 const [input1, SetInp1] = useState(0)

  return (
    <div id="main">
      <ChildComponent input={
       <input id='input' onChange={(e)=>{
   let ans = e.target.value;
   ans = Math.pow(ans, 2);
   SetInp1(ans)
   
  }} />}
 /> 
    
      <p id='output'>{input1}</p>
    </div>
  )
}


export default App;