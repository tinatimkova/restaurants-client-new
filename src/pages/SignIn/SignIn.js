import React from 'react';
import styles from './SignIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignIn({ onClose }) {
    return (
        <>
        <form>
            <h3>Please sign in</h3>
            
            <TextField type='email' name='email' label='Email' variant="outlined" />
            <TextField type='password' name='password' variant="outlined" label='Password'/>
            <Button variant='contained' className='toggle-button' type='submit'>Sign In</Button>
            </form>
        </>
    )
}

export default SignIn
