import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './SignUp.module.css'
import axios from 'axios';

function SignUp({ showModal, getUser }) {
    const [formData, setFormData] = useState({given_name: '', family_name: '', email: '', password: '', password_confirmation: ''})

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4741/sign-up',
            data: { "credentials" : formData }
            })

        getUser(res.data.user.email)
        showModal()
    }

    const handleChange = (e) => {
        setFormData((state) => ({...state,
             [e.target.name]: e.target.value }))
    }

    return (
        <>
            <form className={styles['sign-up-form']} onSubmit={handleSubmit} >
                <h3>Please sign up</h3>
                <hr/>
                <TextField type='text' name='given_name' label='First name' variant="outlined" value={formData.given_name} onChange={handleChange} required />
                <TextField type='text' name='family_name' label='Last name' variant="outlined" value={formData.family_name} onChange={handleChange} />
                <TextField type='email' name='email' label='Email' variant="outlined" value={formData.email} onChange={handleChange} required />
                <TextField type='password' name='password' variant="outlined" label='Password' value={formData.password} onChange={handleChange} required />
                <TextField type='password' name='password_confirmation' variant="outlined" label='Re-enter password' value={formData.password_confirmation} onChange={handleChange} required />
                <Button variant='contained' className='toggle-button' type='submit'>Create an account</Button>
            </form>
        </>
    )
}

export default SignUp
