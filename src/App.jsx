import React from 'react'
import { HashRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Contacts from './pages/Contacts'
import Cv from './pages/Cv.jsx'

function App() {
  return (
    <>
    <Router>
        <Header/>
      <main>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/techStack' element={<TechStack/>}/>
                <Route path='/contact' element={<Contacts/>}/>
                <Route path='/cv' element={<Cv/>}/>
              </Routes>
      </main>
      <Footer/>
    </Router>
      </>
  )
}

export default App