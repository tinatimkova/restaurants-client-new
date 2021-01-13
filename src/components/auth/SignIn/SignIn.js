import React, { useState } from 'react';
import styles from './SignIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signIn } from '../../../api/auth';

function SignIn({ showModal, getUser, showAlert }) {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        signIn(formData)
            .then(res => getUser(res.data.user))
            .then(() => showModal())
            .then(() => showAlert('success', 'You have signed in successfully!'))
            .catch(() => showAlert('error', 'Something went wrong!'))
        }

    const handleChange = (e) => {
        setFormData((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
        <form className={styles['sign-in-form']} onSubmit={handleSubmit}>
            <h3>Please sign in</h3>
            <hr/>
            <TextField variant="outlined" style={{ margin: '0.5rem'}}  type='email' name='email' label='Email' value={formData.email} onChange={handleChange} />
            <TextField variant="outlined" style={{ margin: '0.5rem'}} type='password' name='password' label='Password' value={formData.password} onChange={handleChange} />
            <Button variant='contained' className={styles['toggle-button']} type='submit'>Sign In</Button>
            </form>
        </>
    )
}

export default SignIn
