import React from 'react'

function SignIn({ onClose }) {
    return (
        <div className='modal' id='modal'>
            <form className='content'>
                <label>
                <input type='text' name='first_name' />
                </label>
                <label>
                <input type='text' name='last_name' />
                </label>
                <label>
                <input type='text' name='email' />
                </label>
                <label>
                <input type='text' name='password' />
                </label>
                <label>
                <input type='text' name='password_confirmation' />
                </label>
                <div className='actions'>
                <button className='toggle-button' type='submit' onClose={() => onClose(false)}>Create an account</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
