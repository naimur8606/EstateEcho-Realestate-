import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/MainRoute';
import AuthProvider from './Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </React.StrictMode>,
)
