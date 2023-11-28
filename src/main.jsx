import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/MainRoute';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
    <div className='max-w-6xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    </AuthProvider>
  </QueryClientProvider>
  </React.StrictMode>
    
)
