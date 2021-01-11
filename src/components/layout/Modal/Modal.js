import React from 'react'
import styles from './Modal.module.css'
import Button from '@material-ui/core/Button';

function Modal({ content, onClose }) {
    return (
        <div className={styles['modal']}>
            <div className={styles['modal-main']}>
               {content}
               <Button variant='contained' color='secondary' style={{ marginBottom: '1rem' }} onClick={() => onClose()}>Close</Button>
            </div>
        </div>
    )
}

export default Modal
