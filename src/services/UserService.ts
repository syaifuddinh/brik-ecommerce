import axios from "axios";
import { RegistrationType } from "interfaces/user";
import { BaseUserType } from "interfaces/user";
import GetService from "models/api/api"

class UserService {
    baseUrl = process.env.REACT_APP_API_URL; 

    getUrl(param: string) {
        return  `${this.baseUrl}/${param}`;
    }

    async register(params: RegistrationType) {
        const baseUrl = this.getUrl(`auth/register`)
        const { data } = await axios.post(baseUrl, params)
        return data;
    }

    async login(params: BaseUserType) {
        const baseUrl = this.getUrl(`auth/login`)
        const { data } = await axios.post(baseUrl, params)
        return data;
    }

    async logout(): Promise<any> {
        const baseUrl = this.getUrl(`auth/logout`)
        const { data } = await GetService().post(baseUrl)
        return data;
    }

    async validate(): Promise<any> {
        const baseUrl = this.getUrl(`auth/validate`)
        const { data } = await GetService().get(baseUrl)
        return data;
    }
}

export default UserService;