import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Overlay from './components/4-overlay'
import OverlayDesign from './components/4-overlaydesign'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: < App />,
    children: [
      {
        path: '/',
        children: [
          { path: '/over/:id', element: <Overlay /> },
          { path: '/design/:id', element: <OverlayDesign /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
