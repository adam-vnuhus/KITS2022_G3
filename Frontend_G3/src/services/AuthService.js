import axios from 'axios';

const AUTH_API_BASE_URL = 'http://localhost:8080/api/auth';

class AuthService {
    login(credentials) {
        return axios.post(AUTH_API_BASE_URL + '/login', credentials)
            .then((response) => {
                if (response.data) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }

    logout() {
        localStorage.removeItem('user')
    }

    register(email, password) {
        return axios.post(AUTH_API_BASE_URL + '/register', email, password)
    }

    getCurrentUser() {
        return axios.get(AUTH_API_BASE_URL + '/logout')
            .then(() => JSON.parse(localStorage.getItem('user')))
    }
}

export default new AuthService