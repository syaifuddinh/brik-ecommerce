import React from 'react';
import { BaseInputType } from "interfaces/input";
import InputLabel from "ui/inputLabel";

function DescriptionInput({ value, label, onChange, placeholder }: BaseInputType) {

  return (
    <div className="text-input-container">
        {  label && <InputLabel title={label} isOptional={true} /> }

            <textarea
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            >
            </textarea>
    </div>
  );
}

export default DescriptionInput;
