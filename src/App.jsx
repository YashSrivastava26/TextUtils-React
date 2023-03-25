import './App.css';
import NavBar from './Components/NavBar'
import InputArea from './Components/InputArea'
import Alert from './Components/Alerts';
// import About from './Components/About';
import { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import Footer from './Components/Footer';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode == 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#343a40';
      document.body.style.color= 'white';
      showAlert('DarkMode Enable', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color= 'black';
      showAlert('DarkMode Disable', 'success');
    }
  }

  const showAlert=(msg, variant) =>{
    setAlert({
      variant: variant,
      msg: msg
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      {/* <Router> */}
      <NavBar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <InputArea mode={mode} showAlert={showAlert}/>
      {/* <Routes>
        <Route exact path='/' element={<InputArea mode={mode} showAlert={showAlert}/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>       
      </Routes> */}
      <Footer/>
      {/* </Router> */}
    </>
  );
}

export default App;
