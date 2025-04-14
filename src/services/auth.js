import SERVICE_URLS from "../constants/service_urls";

const AuthService = {
    async login (email, password) {
        const response = await fetch(SERVICE_URLS.AUTH_URL + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    },
}

export default AuthService;