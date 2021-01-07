import React, { useState } from 'react';
import styles from './SignIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios({
            method: 'POST',
            url: 'http://localhost:4741/sign-in',
            data: formData
        })

        console.log(res)
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
            <TextField variant="outlined"  type='email' name='email' label='Email' value={formData.email} onChange={handleChange} />
            <TextField variant="outlined" type='password' name='password' label='Password' value={formData.password} onChange={handleChange} />
            <Button variant='contained' className='toggle-button' type='submit'>Sign In</Button>
            </form>
        </>
    )
}

export default SignIn
