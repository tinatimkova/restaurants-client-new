import React from 'react'
import './Navbar.module.css'
import Button from '@material-ui/core/Button';
import SignIn from '../../auth/SignIn/SignIn'
import SignUp from '../../auth/SignUp/SignUp'
import Modal from '../Modal/Modal'
import { signOut } from '../../../api/auth'

function Navbar({ showModal, modal, content, getUser, user, showAlert }) {

    const handleSingOut = () => {
        signOut(user)
            .then(() => showAlert('success', 'You successfully signed out!'))
            .then(() => getUser(null))
        
    }

    return (
        <>
        { user !== null ?  <nav className='navbar'><div>Welcome, {user.email}</div>
        <Button variant='contained' color='primary' style={{ margin: '0.3rem'}} onClick={handleSingOut} >Log out</Button>
        </nav>:
        <nav className='navbar'>
        <Button variant='contained' color='secondary' style={{ margin: '0.3rem'}} onClick={() => showModal(<SignUp showModal={showModal} getUser={getUser} showAlert={showAlert} />)} >Sign up</Button>
        <Button variant='outlined' color='secondary' style={{ margin: '0.3rem'}} onClick={() => showModal(<SignIn showModal={showModal} getUser={getUser} showAlert={showAlert} />)} className='toggle-button'>Sign in</Button>
        </nav>}
        {modal && <Modal content={content} onClose={showModal} />}
        </>
    )
}

export default Navbar
