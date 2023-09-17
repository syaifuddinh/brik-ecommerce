import React from 'react';
import { useState } from 'react';
import { SelectInputType } from "interfaces/input"
import { SelectListType } from "interfaces/select"
import Select from 'react-select'

function SelectInput({ value, label, onChange, placeholder, options }: SelectInputType) {
    const [dataValue, setDataValue] = useState(null)

  const onDataChange = (val: any) => {
    setDataValue(val)
    if(!onChange) return;
    onChange(val.value, val);
  }

  return (
    <div className="text-input-container">
        {  label && (
            <div className="text-input-container_label">
                { label }
            </div>
        ) }

        <Select
            options={options}
            placeholder={placeholder}
            value={dataValue}
            onChange={onDataChange}
        />
    </div>
  );
}

export default SelectInput;
