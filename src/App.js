import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  const [theme, setTheme] = useState('light');
  const [alert, setAlert] = useState(null);
  function alertBox(type,message){
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleTheme = ()=>{
    if(theme==='light'){
      setTheme('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      alertBox('success','Dark mode on!');
    }
    else{
      setTheme('light');
      document.body.style.backgroundColor='#c8deff';
      document.body.style.color='black';
      alertBox('success','Light mode on!');
    }
  }

  return (
    <>
     <Navbar toggleTheme={toggleTheme} mode={theme}/>
     <Alert alert={alert}/>
     <Textbox  mode={theme} alert={alertBox}/>
    </>
  );
}

export default App;
