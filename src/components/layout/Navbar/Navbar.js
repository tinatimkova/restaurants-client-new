import React, { useState } from 'react'
import './Navbar.module.css'
import Button from '@material-ui/core/Button';
import SignIn from '../../../pages/SignIn/SignIn'
import SignUp from '../../../pages/SignUp/SignUp'
import Modal from '../Modal/Modal'

function Navbar({ showModal, modal, content }) {

    return (
        <>
        <nav className='navbar'>
            <Button variant='contained' color='secondary'onClick={() => showModal(<SignUp />)} >Sign up</Button>
            <Button variant='outlined' color='secondary' onClick={() => showModal(<SignIn />)} className='toggle-button'>Sign in</Button>
        </nav>
        {modal && <Modal content={content} onClose={showModal} />}
        </>
    )
}

export default Navbar
