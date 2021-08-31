import React, {useEffect} from 'react'


import './layout.css'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import TopNav from '../topnav/TopNav'

import { BrowserRouter, Route } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'

import ThemeActions from '../../redux/actions/ThemeAction'

const Layout = () => {

    const  ReducersTheme = useSelector(state => state.ReducersTheme)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeActions.setMode(themeClass))
        dispatch(ThemeActions.setColor(themeClass))
        
    }, [dispatch])

    return (
       <BrowserRouter>
           <Route render={(props) => (
               <div className={`layout ${ReducersTheme.mode} ${ReducersTheme.color}`}>
                   <Sidebar {...props}/>
                   <div className="layout__content">
                       {/* TOp NAV */}
                       <TopNav/>
                       <div className="layout__content-main">
                           <Routes/>
                       </div>
                   </div>
               </div>
           )}/>
       </BrowserRouter>
    )
}

export default Layout
