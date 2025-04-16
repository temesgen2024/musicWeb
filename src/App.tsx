import './App.css'
import Auth from './pages/Auth/Auth'
import { Route,Routes } from 'react-router'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
