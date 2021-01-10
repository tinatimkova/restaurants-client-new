import apiUrl from '../apiConfig';
import axios from 'axios';

export const signIn = formData => {
    return axios({
        url: `${apiUrl}/sign-in`,
        method: 'POST',
        data: { "credentials": formData }
    })
}

export const signUp = formData => {
    return axios({
        url: `${apiUrl}/sign-up`,
        method: 'POST',
        data: { "credentials": formData }
    })
}

export const signOut = (user) => {
    return axios({
        url: `${apiUrl}/sign-out`,
        method: 'DELETE',
        headers: {
            'Authorization': `Token token=${user.token}`
        }
    })
}

