import React, { useState } from 'react';
import styles from './SignIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignIn() {
    const [formData, setFormData] = useState({ email: '', password: '' })

    return (
        <>
        <form className={styles['sign-in-form']}>
            <h3>Please sign in</h3>
            <hr/>
            <TextField variant="outlined"  type='email' name='email' label='Email' value={formData.email} />
            <TextField variant="outlined" type='password' name='password' label='Password' value={formData.password} />
            <Button variant='contained' className='toggle-button' type='submit'>Sign In</Button>
            </form>
        </>
    )
}

export default SignIn
