import axios from "axios";

export const api = axios.create({
    baseURL: 'https://contasapi.herokuapp.com'
    // baseURL: 'http://localhost:3030'
});

export interface IToken {
    token: string;
}

export const token = async () => await api.post<IToken>('/auth/login', {email: process.env.emailteste, senha: process.env.senhateste});
