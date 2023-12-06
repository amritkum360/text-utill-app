import UtillText from './utilltext'
import Nav from './nav'
import './App.css'
import { useState } from 'react'
import Alert from './Alert'
import About from './About'
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";





function App() {
  const [mode, setmode] = useState("light") //dark mode status
  const [alert, setAlert] = useState() //Alert status

  const sendAlert = (msg, type) => {
    setAlert({
      msg: msg ,
      type: type
    })
    setTimeout(() => {
      setAlert()
    }, 2000);
  }
  const toggleMode = () =>{
    if( mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor = "black"
      sendAlert("Dark Mode Has Been Enabled", "success")
    }  else {
      setmode("light")
      document.body.style.backgroundColor = "white"
      sendAlert("Light Mode Has Been Enabled", "success")
    }
  }

  // const sendAlert = () =>{
  //   console.log("allet Called")
  // }




  return (
    <>
    <BrowserRouter>
    <Nav mode={mode} toggleMode={toggleMode} Link={Link}/>
      {alert && <Alert alert={alert} />}
      <Routes>
      
      <Route path="/" element={<UtillText mode={mode} sendAlert={sendAlert} />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
      

      

      
      
    </>
  )
}

export default App
