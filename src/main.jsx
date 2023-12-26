import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import Navbar from './components/Navbar.jsx'
import ProjectsDetails from './pages/ProjectsDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar/>
      </div>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/projects/:id' element={<ProjectsDetails/>}/>
        </Routes>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
)
