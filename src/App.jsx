import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Principal from './pages/Principal.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Proyects from './pages/Proyects.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  

  return (
  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
         <Route index element={<Principal />} />
        </Route>
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Proyects" element={<Proyects />} />
        <Route path="/Contact" element={<Contact />} />
                
          </Routes>
     </BrowserRouter>
    
  )
}

export default App
