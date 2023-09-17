import React from "react";

type ButtonType = {
    children: React.ReactNode;
    variant: string;
    width?: string;
    disabled?: boolean;
    onClick: () => void
};

const Button = ({ children, variant, disabled, width, onClick }: ButtonType) => {
    const className = `button ${variant} ${disabled === true ? "disabled" : ""}`;

    const onDataClick = () => {
        if(disabled === true) return;
        onClick();
    }

    return (
        <button
            type="button"
            className={className}
            onClick={onDataClick}
            style={{ width }}
        >
            { children }
        </button>
    )
}

export default Button;