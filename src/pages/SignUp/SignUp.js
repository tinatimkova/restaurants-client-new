import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './SignUp.module.css'

function SignUp() {
    return (
        <>
            <form className={styles['sign-up-form']}>
                <h3>Please sign up</h3>
                <hr/>
                <TextField type='text' name='first_name' label='First name' variant="outlined" />
                <TextField type='text' name='last_name' label='Last name' variant="outlined" />
                <TextField type='email' name='email' label='Email' variant="outlined" />
                <TextField type='password' name='password' variant="outlined" label='Password'/>
                <TextField type='password' name='password_confirmation' variant="outlined" label='Re-enter password'/>
                <Button variant='contained' className='toggle-button' type='submit'>Create an account</Button>
            </form>
        </>
    )
}

export default SignUp
