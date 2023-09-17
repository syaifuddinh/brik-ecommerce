import React from 'react';
import { TextInputType } from "interfaces/input"
import InputLabel from "ui/inputLabel";

function TextInput({ value, label, onChange, placeholder, isOptional, rightDecorator, type = "text" }: TextInputType) {

  return (
    <div className="text-input-container">
        {  label && <InputLabel title={label} isOptional={isOptional} /> }

        <div className="text-input-container_main">
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />

            { rightDecorator && (
                <div className="text-input-container_right-decorator">
                    { rightDecorator }
                </div>
            ) }
        </div>

    </div>
  );
}

export default TextInput;
