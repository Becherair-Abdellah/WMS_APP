import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import MainPages from './layouts/MainPages'
import Signin from './pages/login/Signin'
import Signup from './pages/signup/Signup'
import Inbound from './pages/inbound/Inbound'
const Router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index:true, element: <MainPages/>},
            {path:'/inbound', element: <Inbound/>},
            // {path:'/login', element: <Signin/>},
            // {path:'/signup', element: <Signup/>},
        ]
    },
    {
        path: '/signin',
        element: <Signin/>,
        // children: []
    },
    {
        path: '/signup',
        element: <Signup/>,
        // children: []
    }
])

export default Router
