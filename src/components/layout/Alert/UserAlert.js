import React from 'react'
import Alert from '@material-ui/lab/Alert';

function UserAlert({ alert }) {
    return (
        <div>
            <Alert severity={alert.type} style={{ width: '30%', margin: 'auto' }}>{alert.msg}</Alert>
        </div>
    )
}

export default UserAlert
