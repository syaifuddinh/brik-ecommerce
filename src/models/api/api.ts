import axios from "axios";
import User from "models/user/user"

const GetService = () => {
    const user = new User();
    const token = user.getToken();
    const headers =  {
        "Authorization": `Bearer ` + token
    }

    const Api = axios.create({ 
        headers 
    });

    return Api;
}

export default GetService;