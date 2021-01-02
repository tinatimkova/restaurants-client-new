import React, { useState } from 'react'
import './Navbar.module.css'
import Button from '@material-ui/core/Button';
import SignIn from '../../../pages/SignIn/SignIn'
import Modal from '../Modal/Modal'

function Navbar({ showModal, modal }) {

    return (
        <>
        <nav className='navbar'>
            <Button variant='contained' color='secondary'onClick={() => showModal()} >Sign up</Button>
            <Button variant='outlined' color='secondary' onClick={() => showModal()} className='toggle-button'>Sign in</Button>
        </nav>
        {modal && <Modal onClose={showModal} />}
        </>
    )
}

export default Navbar
