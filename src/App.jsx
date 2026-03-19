import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Career from './Components/Career.jsx'
import Contact from './Components/Contact.jsx'
import Body from './Components/Body.jsx'
import Community from './Components/Community.jsx'
import Study from './Components/Study.jsx'
import Blog from'./Components/Blog.jsx'
import Login from './Components/Login.jsx'
import Signin from './Components/Signinpage/Signin.jsx'


function App() {

    // const router=createBrowserRouter(
    //   createRoutesFromElements(

    //     <Route path='/' element={<Layout/>}>
    //     <Route path='/' element={<Career/>}/>
    //     <Route path='/Body' element={<Body/>}/>
    //     <Route path='/Blog' element={<Blog/>}/>
    //     <Route path='/Study' element={<Study/>}/>
    //     <Route path='/Community' element={<Community/>}/>
    //     <Route path='/Contact' element={<Contact/>}>
    //     </Route>
           
    //     </Route>
        
                
          
    //   )
      
    // )
  return (
    <>




      {/* <div className=' h-full w-full overflow-hidden'> */}


        {/* <Body/> */}
        {/* <Blog/> */}
        {/* <Career/> */}
        {/* <Community/> */}
        {/* <Studypage/> */}
         {/* <Contactpage/> */}


      {/* </div> */}

      

 <Signin/>
 



      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App
