import './App.css'
import Auth from './pages/Auth/Auth'
import { Route,Routes } from 'react-router'
import Home from './pages/Home/Home'
import Discover from './pages/discover/Discover'
import Album from './pages/Album/Album'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
        <Route path='/discover' element={<Discover/>} />
        <Route path="/album" element= {<Album/>} />
      </Routes>
    </>
  )
}

export default App
