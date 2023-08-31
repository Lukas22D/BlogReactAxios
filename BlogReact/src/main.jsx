import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//pages 
import Home from './routes/home.jsx'
import NewPost from './routes/newPost.jsx'
import ViewMore from './routes/ViewMore.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,

      },
      {
        path: '/new',
        element: <NewPost />,

      },
      {
        path: '/post/:id',
        element: <ViewMore />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
