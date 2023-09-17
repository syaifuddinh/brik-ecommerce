import React from "react";
import LeftArrowIcon from "assets/icons/primary-arrow-left.svg";
import { useNavigate } from "react-router-dom";

type BackwardButtonType = {
    onClick: () => void
}

const BackwardButton = ({ onClick }: BackwardButtonType) => {

    return (
        <div
            onClick={onClick}
            className="backward-button"
        >
            <img
                src={LeftArrowIcon}
                alt="backward-button"
                style={{height: "2.5rem", width: "auto"}}
            />  
        </div>
    )
}

export default BackwardButton;