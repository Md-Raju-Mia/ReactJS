
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
//import TextForm from './Components/TextForm';

function App() {
  return (
    <>
     <Navbar title="Second Project" AboutText="About Second Project"/>

     <div className="container my-3">
         {/*<TextForm heading="Enter the text to Analyze"/>  */}
         <About/>
     </div>
     
     </>
  );
}

export default App;
