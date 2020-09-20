import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import './layout.css';

const layout = ({children}) => {
    return (
        <>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
            
        </>
    )
}

export default layout
