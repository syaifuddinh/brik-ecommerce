import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { showMessage } from "utils/notification";
import { showErrorMessage } from "utils/notification";
import UserService from "services/UserService";
import UserModel from "models/user/user";


const useStateController = () => {
    const [payload, setPayload] = useState({
        username: "",
        password: ""
    })
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const setUsername = (val: string) => {
        setPayload({...payload, username: val});
    }

    const setPassword = (val: string) => {
        setPayload({...payload, password: val});
    }

    const setDisability = () => {
        setIsDisabled( !payload.username || !payload.password );
    }

    const login = async () => {
        setIsDisabled(true);
        const user = new UserModel();
        try {

            const service = new UserService();
            const { status, message, data } = await service.login(payload);
            if(status !== 200) throw message;
            const { token, fullname } = data;
            user.setCredential(token as string, fullname as string);
            showMessage("User signed-in successfully");
            setTimeout(() => {
                navigate("/");
            }, 600);
        } catch(e) {
            showErrorMessage(e as string);

        }
        setIsDisabled(false);
    }

    useEffect(() => {
        setDisability();
    }, [payload])

    return { payload, isDisabled, login, setUsername, setPassword }
}

export default useStateController;