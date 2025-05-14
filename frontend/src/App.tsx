import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './Pages/Home'
import Chat from './Pages/Chat'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/chats' Component={Chat} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
