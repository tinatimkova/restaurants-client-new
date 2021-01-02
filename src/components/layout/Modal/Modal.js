import React from 'react'
import styles from './Modal.module.css'
import Button from '@material-ui/core/Button';

function Modal({ content, onClose }) {
    return (
        <div className={styles['modal']}>
            <div className={styles['modal-main']}>
                <h3>Hello world!</h3>
            </div>
            <Button variant='contained' color='secondary' onClick={() => onClose()}>Close</Button>
        </div>
    )
}

export default Modal
