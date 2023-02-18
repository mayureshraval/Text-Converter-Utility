import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  // 1. created a state variable for theme and passed light mode by default. next look toggleTheme.
  const [theme, setTheme] = useState('light');

  // 8. create an alert state variable which is set to null so that we can hide it first since we are using && in alert.js
  const [alert, setAlert] = useState(null);
  // 9. Also creating a function that can receive parameters and set the value of alert object through setAlert method, and setTimeout to hide the alert after 2 secs.
  function alertBox(type,message){
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  // 2. created a function for when this is called we check the current mode and set the inverse colors accordingly via setThme into theme variable.
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
    {/* 3. then we pass the the toggletheme function and the state variable theme through props to Navbar */}
     <Navbar toggleTheme={toggleTheme} mode={theme}/>
     {/*11. passing the alert state object into alert.js as props */}
     <Alert alert={alert}/>
     {/* 14. To use alert now we pass the alertBox function in alert prop to Textbox.js */}
     <Textbox  mode={theme} alert={alertBox}/>
    </>
  );
}

export default App;
