import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Career from './Components/Career.jsx'
import Contact from './Components/Contact.jsx'
import Body from './Components/Body.jsx'
import Community from './Components/Community.jsx'
import Study from './Components/Study.jsx'
    // const router=createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route path='/' element={<Layout/>}>
    //     <Route path='/Career' element={<Career/>}/>
    //     <Route path='/Body' element={<Body/>}/>
    //     <Route path='/Study' element={<Study/>}/>
    //     <Route path='/Community' element={<Community/>}/>
    //     <Route path='/Contact' element={<Contact/>}/>
    //     </Route>
    //   )
    // )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
