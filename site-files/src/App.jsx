import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import NavMenu from './components/NavMenu'
import Login from './pages/Login'


function App() {
  return <BrowserRouter>
  <NavMenu />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='projects' element={<Projects />} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} />
  </Routes>
  </BrowserRouter>
  
}

export default App
