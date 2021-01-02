import React, { useState } from 'react'
import './Navbar.module.css'
import Button from '@material-ui/core/Button';
import SignIn from '../../../pages/SignIn/SignIn'

function Navbar({ showSignInForm, signInForm }) {

    return (
        <>
        <nav className='navbar'>
            <Button variant='contained' color='secondary' >Sign up</Button>
            <Button variant='outlined' color='secondary' onClick={() => showSignInForm()} className='toggle-button'>Sign in</Button>
        </nav>
        {signInForm && <SignIn onClose={showSignInForm} />}
        </>
    )
}

export default Navbar
