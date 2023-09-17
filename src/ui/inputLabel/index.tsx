import React from "react";

type InputLabelType = {
    title: string;
    isOptional?: boolean;
};

const InputLabel = ({ title, isOptional }: InputLabelType) => {

    return (
        <div className="text-input-container_label">
            <div className="title">
                { title }
            </div>
            { isOptional === true && (
                <div className="is-optional">
                    (Optional)
                </div>
            ) }
        </div>
    )
}

export default InputLabel;