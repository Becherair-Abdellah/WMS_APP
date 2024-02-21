import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import MainPages from './layouts/MainPages'
import Signin from './pages/login/Signin'
import Signup from './pages/signup/Signup'
import Inbound from './pages/inbound/Inbound'
import ASN from './pages/inbound/ASN'
import PreDeleviry from './pages/inbound/PreDeleviry'
const Router = createBrowserRouter([
    {
        path: '/',
        element:
            <App/>
        ,
        children: [
            {index:true, element: <MainPages/>},
            {path:'/inbound', element: <Inbound/>,
            children:[
                {path:'/inbound/asn',element: <ASN/>},
                {path:'/inbound/predeliverystock',element: <PreDeleviry/> },
                {path:'/inbound/preloadstock',element: <h1> preloadstock</h1>},
                {path:'/inbound/presortstock',element: <h1>Inside Inbound sortstock</h1>},
                {path:'/inbound/sortstock',element: <h1>Inside Inbound sortstock</h1>},
                {path:'/inbound/shortage',element: <h1>Inside Inbound shortage</h1>},
                {path:'/inbound/more',element: <h1>Inside Inbound more</h1>},
                {path:'/inbound/asnfinish',element: <h1>Inside Inbound asnfinish</h1>},
            ]},
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
