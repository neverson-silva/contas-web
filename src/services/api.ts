import { LocalStorageService } from './local-storage';
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class ApiService {

    private http: AxiosInstance = axios.create({
        baseURL: 'https://contasapi.herokuapp.com'
        // baseURL: 'http://localhost:3030'
    });

    private readonly local: LocalStorageService = new LocalStorageService();

    async get(url: string, config?: AxiosRequestConfig) {

        return await this.http.get(url, this.addAuthHeader(config));
    }

    async post(url: string, data?: any, config?: AxiosRequestConfig) {
        return await this.http.post(url, data, this.addAuthHeader(config));
    }

    async put(url: string, data?: any, config?: AxiosRequestConfig) {
        return await this.http.put(url, data, this.addAuthHeader(config));
    }

    async delete(url: string, config?: AxiosRequestConfig) {
        return await this.http.delete(url, this.addAuthHeader(config));
    }

    addAuthHeader(config?: AxiosRequestConfig){
        let token;
        if (this.local.isLoggedIn()) {

            token = this.local.token();
            if (config) {
                Object.assign(config?.headers, {
                    Authorization: 'Bearer ' + token
                });
            } else {
                config = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }
            }

        }
        return config;
    }
}
