import React from "react";
import { useState } from "react";
import UserIcon from "assets/icons/user-circle.svg";
import User from "models/user/user";
import UserService from "services/UserService";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const user = new User()
    const userName = user.getFullname();
    const [isDisabled, setIsDisabled] = useState(false);
    const navigate = useNavigate();

    const onLogout = async (e: any) => {
        e.preventDefault();
        setIsDisabled(true);
        try {
            const service = new UserService();
            await service.logout();
            user.removeCredential();
            navigate("/login");
        } catch {

        }

        setIsDisabled(false);
    }

    return (
        <div className="navbar-container">
            <div className="navbar-container_main">
                    <img
                        src={UserIcon}
                        alt="user-profile"
                        loading="lazy"
                    />

                    <div className="navbar-container_main__title">
                        { userName }
                    </div>      
                    <div className="navbar-container_main__divider">
                        |
                    </div>      
                    <a
                        href="#"
                        className={`${isDisabled === true ? "disabled" : ""}`}
                        onClick={onLogout}
                    >
                        Logout
                    </a>      
            </div>
        </div>
    )
}

export default Navbar;