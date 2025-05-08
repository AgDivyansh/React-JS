import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import ContactUs from './Components/Contact/ContactUs.jsx'

import User from './Components/User/User.jsx'
import GitHub from './Components/GitHub/GitHub.jsx'

import { githubInfoLoader } from './Components/GitHub/GitHub.jsx'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         // path: "",
//         // element: <Home />
//       },
//       {
//         path: "About",
//         element: <About />
//       },
//       {
//         path: "ContactUs",
//         element: <ContactUs />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout />} >
      <Route path='Home' element = {<Home />} />
      {/* <Route path='Home' element= {<Home />} /> */}
      <Route path='About' element={<About />} />
      <Route path='ContactUs' element={<ContactUs />} />
      <Route path='User' element ={<User />} />
      <Route path='User/:userid' element ={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='GitHub'
       element ={<GitHub />} 
       />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
