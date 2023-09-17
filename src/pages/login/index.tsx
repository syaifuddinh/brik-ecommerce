import React from 'react';
import "assets/css/_auth.scss";
import TextInput from "ui/input/text";
import Button from "ui/button";
import useStateController from "./state-controller";
import { Link } from "react-router-dom";

function Login() {
    const { payload, login, isDisabled, setUsername, setPassword } = useStateController();
    
  return (
    <div className="auth-container">
        <div className="auth-container_main">
            <div className="auth-container_main__title">
                LOGIN
            </div>

            <div className="auth-container_main__content">
                <TextInput
                    label="Username"
                    placeholder="Ex: yourusername"
                    value={payload.username}
                    onChange={(val: string) => setUsername(val)}
                />                

                <TextInput
                    type="password"
                    label="Password"
                    placeholder="Ex: yourpassword"
                    value={payload.password}
                    onChange={(val: string) => setPassword(val)}
                />                

            </div>

            <div className="auth-container_main__button">
                <Button
                    variant="primary"
                    width="15rem"
                    disabled={isDisabled}
                    onClick={() => login()}
                >
                    Login
                </Button>
            </div>   

            <div className="auth-container_main__info">
                <Link to="/registration">Don't have an account ?</Link>
            </div>
        </div>
    </div>
  );
}

export default Login;
