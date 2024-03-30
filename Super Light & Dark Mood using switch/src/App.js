
import { useState } from 'react';
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  
const [mode,setmode]=useState('light');
const togglemode = ()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor='#071f43';
  }else{
    setmode('light')
    document.body.style.backgroundColor='white';
  }
}
  return (
    <>
     <Navbar title="Second Project" AboutText="About Second Project" mode={mode} togglemode={togglemode}/>

     <div className="container my-3">
         <TextForm heading="Enter the text to Analyze" mode={mode}/>
         {/* <About/> */}
     </div>
     
     </>
  );
}

export default App;
