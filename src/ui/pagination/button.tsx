import React from "react";
import Button from "./button";
 
type PaginationButtonType = {
    children: React.ReactNode;
    isActive?: boolean;
    onClick?: () => void;
};

const PaginationButton = ({ children, isActive, onClick }: PaginationButtonType) => {

    return (
        <div
            className={`pagination_button ${isActive == true ? "active" : ""}`}
            onClick={onClick}
        >
            { children }
        </div>
    )
}

export default PaginationButton;