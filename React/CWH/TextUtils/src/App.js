
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const  [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }
  const toogleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","Success");
    } else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","Success");

    }
  }
  return (
   <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toogleMode={toogleMode}></Navbar>
    <div style={{height:50}}>
      <Alert alert={alert}></Alert>
    </div>
    
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}></TextForm>
    {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
