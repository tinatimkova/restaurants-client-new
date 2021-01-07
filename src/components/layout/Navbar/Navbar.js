import React from 'react'
import './Navbar.module.css'
import Button from '@material-ui/core/Button';
import SignIn from '../../../pages/SignIn/SignIn'
import SignUp from '../../../pages/SignUp/SignUp'
import Modal from '../Modal/Modal'

function Navbar({ showModal, modal, content, getUser, email }) {

    const handleSingOut = () => {
        getUser(email = '')
    }

    return (
        <>
        { email !=='' ?   <nav className='navbar'><div>Welcome, {email}</div>
        <Button variant='contained' color='primary' onClick={handleSingOut} >Log out</Button>
        </nav> :
        <nav className='navbar'>
        <Button variant='contained' color='secondary'onClick={() => showModal(<SignUp showModal={showModal} getUser={getUser} />)} >Sign up</Button>
        <Button variant='outlined' color='secondary' onClick={() => showModal(<SignIn showModal={showModal} getUser={getUser} />)} className='toggle-button'>Sign in</Button>
        </nav>}
        {modal && <Modal content={content} onClose={showModal} />}
        </>
    )
}

export default Navbar
