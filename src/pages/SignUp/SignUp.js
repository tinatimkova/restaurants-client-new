import React from 'react'

function SignUp() {
    return (
        <div className={styles['modal']}>
            <form className={styles['modal-main']}>
                <h3>Please Sign In</h3>
                <TextField type='text' name='first_name' label='First name' variant="outlined" />
                <TextField type='text' name='last_name' label='Last name' variant="outlined" />
                <TextField type='email' name='email' label='Email' variant="outlined" />
                <TextField type='password' name='password' variant="outlined" label='Password'/>
                <Button variant='contained' className='toggle-button' type='submit'>Create an account</Button>
                <Button variant='contained' color='secondary' onClick={() => onClose()}>Close</Button>
            </form>
        </div>
    )
}

export default SignUp
