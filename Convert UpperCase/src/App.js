
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
     <Navbar title="Second Project" AboutText="About Second Project"/>

     <div className="container my-3">
         <TextForm heading="Enter the text to Analyze"/>  
     </div>
     
     </>
  );
}

export default App;
