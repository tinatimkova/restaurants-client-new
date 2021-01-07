import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './SignUp.module.css'
import axios from 'axios';

function SignUp() {
    const [formData, setFormData] = useState({first_name: '', last_name: '', email: '', password: ''})

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4741/sign-up',
            data: formData
            })

        console.log(res)
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
                <TextField type='text' name='first_name' label='First name' variant="outlined" value={formData.first_name} onChange={handleChange} required />
                <TextField type='text' name='last_name' label='Last name' variant="outlined" value={formData.last_name} onChange={handleChange} />
                <TextField type='email' name='email' label='Email' variant="outlined" value={formData.email} onChange={handleChange} required />
                <TextField type='password' name='password' variant="outlined" label='Password' value={formData.password} onChange={handleChange} required />
                <TextField type='password' name='password_confirmation' variant="outlined" label='Re-enter password' required />
                <Button variant='contained' className='toggle-button' type='submit'>Create an account</Button>
            </form>
        </>
    )
}

export default SignUp
