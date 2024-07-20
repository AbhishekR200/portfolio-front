import './App.css'
import Header from './components/Header'
import {Routes, Route } from 'react-router-dom';
import Resume from './pages/Resume'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<About />} />
         
      </Routes>
      <Footer/>
    </>
  )
}

export default App