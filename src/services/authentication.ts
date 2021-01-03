import { LocalStorageService } from './local-storage';
import  ApiService from './api';

export class AuthenticationService {

    private readonly LOGIN_URL: string = '/auth/login';
    private readonly REFRESH_URL: string = '/auth/refreshToken';


    private readonly api: ApiService = new ApiService();
    private readonly localStorage: LocalStorageService = new LocalStorageService();


    async login(email: string, senha: string) {
        
        try {
            const token = await this.api.post(this.LOGIN_URL, {email, senha});
            
            this.localStorage.setItem('token', token.data.token);
            this.localStorage.setItem('logado', true);

        } catch(e) {
            throw e;
        }
    }

    async refreshToken() {
        const token = this.localStorage.getItem('token');
        
        try {
            const newToken = await this.api.post(this.REFRESH_URL);
            this.localStorage.setItem('token', newToken.data.token);
            this.localStorage.setItem('logado', true);
        }catch(e) {
            this.logout();
        }

    }

    logout() {
        this.localStorage.deleteItem('token');
        this.localStorage.setItem('logado', false);
    }

    isLoggedIn(): boolean {
        return this.localStorage.isLoggedIn();
    }
}