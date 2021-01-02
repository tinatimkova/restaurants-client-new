import React from 'react';
import styles from './SignIn.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SignIn({ onClose }) {
    return (
        <div className={styles['modal']}>
            <form className={styles['modal-main']}>
                <h3>Please sign in</h3>
                <hr/>
                <TextField type='email' name='email' label='Email' variant="outlined" />
                <TextField type='password' name='password' variant="outlined" label='Password'/>
                <Button variant='contained' className='toggle-button' type='submit'>Create an account</Button>
                <Button variant='contained' color='secondary' onClick={() => onClose()}>Close</Button>
            </form>
        </div>
    )
}

export default SignIn
