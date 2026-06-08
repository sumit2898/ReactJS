import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contactus from './components/Contactus.jsx'
import User from './components/User/User.jsx'
import Github, { githubdataloader } from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'contactus',
//         element: <Contactus />,
//       },
//     ],
//   },
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/> }>
      <Route path = '' element = {<Home/> }/>
      <Route path = 'about' element = {<About/> }/>
      <Route path = 'contactus' element = {<Contactus/> }/>

      <Route path = 'user/:userid' element = {<User/> }/>
      <Route path='github' loader={githubdataloader} element={<Github />} />
      <Route path='github/:gitid' loader={githubdataloader} element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
