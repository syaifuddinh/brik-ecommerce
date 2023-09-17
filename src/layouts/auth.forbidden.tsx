import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "services/UserService";
import { useNavigate } from "react-router-dom";

const AuthForbidden = ({ children }: { children: any }) => {
    const user = new UserService();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const auth = async () => {
        if(isLoading === true) return;
        let isAuth: boolean = false;
        setIsLoading(true);
        try {
            const { data } = await user.validate();
            isAuth = data.isAuth;
        } catch{
            isAuth = false;
        }

        if(isAuth === true) navigate("/");
        else 
            setIsLoading(false);
    }

    useEffect(() => {
        auth();
    }, [])

    return <>
        { isLoading === true && (
            <h1 style={{position: "fixed", left: "45%", top: "5rem"}}>
                Loading....
            </h1>
        )}
        { isLoading === false && (
            <>
                { children }
            </>
        )}
    </>
}

export default AuthForbidden;