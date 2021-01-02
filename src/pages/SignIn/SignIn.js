import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './SignIn.module.css'

function SignIn({ onClose }) {
    return (
        <div className='modal' id='modal'>
            <form className='sign-in-form'>
                <TextField type='text' name='first_name' label='First name' variant="outlined" />
                <TextField type='text' name='last_name' label='Last name' variant="outlined" />
                <TextField type='email' name='email' label='Email' variant="outlined" />
                <TextField type='password' name='password' variant="outlined" label='Password'/>
                <TextField type='password' name='password_confirmation' label='Password Confirmation' variant="outlined" />
                <div className='actions'>
                <Button variant='primary' className='toggle-button' type='submit' onClose={() => onClose(false)}>Create an account</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
