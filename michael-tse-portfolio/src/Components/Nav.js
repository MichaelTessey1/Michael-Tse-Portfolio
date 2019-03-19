import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navigation'>
            <h1 className='navTitle'><a className='navcomp' href='/' >Michael Tse</a></h1>
            <h2 className='navAbout'><a className='navcomp' href='#about'>About</a></h2>
            <h2 className='navProjects'><a className='navcomp' href='#project'>Projects</a></h2>
            <h2 className='navContact'><a className='navcomp' href='#contact'>Contact</a></h2>
        </nav>
    )
}

export default Nav