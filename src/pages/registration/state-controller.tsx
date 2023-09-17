import { useState } from 'react';
import { useEffect } from 'react';
import { showMessage } from "utils/notification";
import { showErrorMessage } from "utils/notification";
import UserService from "services/UserService";
import { useNavigate } from "react-router-dom";

const useStateController = () => {
    const [payload, setPayload] = useState({
        fullname: "",
        username: "",
        password: ""
    })
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const setFullname = (val: string) => {
        setPayload({...payload, fullname: val});
    }

    const setUsername = (val: string) => {
        setPayload({...payload, username: val});
    }

    const setPassword = (val: string) => {
        setPayload({...payload, password: val});
    }

    const setDisability = () => {
        setIsDisabled( !payload.fullname || !payload.username || !payload.password );
    }

    const register = async () => {
        setIsDisabled(true);
        try {

            const user = new UserService();
            const { status, message } = await user.register(payload);
            if(status !== 200) throw message;
            showMessage("User registered successfully");
            navigate("/login");
        } catch(e) {
            showErrorMessage(e as string);

        }
        setIsDisabled(false);
    }

    useEffect(() => {
        setDisability();
    }, [payload])

    return { payload, register, setUsername, setPassword, setFullname, isDisabled }
}

export default useStateController;