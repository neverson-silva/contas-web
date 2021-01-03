
export class LocalStorageService {

    getItem(name: string) {
        return localStorage.getItem(name);
    }

    setItem(name: string, value: any) {
        localStorage.setItem(name, value);
    }

    deleteItem(name: string) {
        localStorage.removeItem(name);
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('logado') as unknown as boolean;
    }

    token() {
        return this.getItem('token');
    }
}