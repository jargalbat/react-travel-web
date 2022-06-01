import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div>Navbar</div>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TRAVEL <i className='fab fa-typo3'></i>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Navbar