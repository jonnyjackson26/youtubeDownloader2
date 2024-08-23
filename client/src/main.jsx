import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';



const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
])

export const Context = React.createContext();

function Main() {
  return (
    <Context.Provider>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)