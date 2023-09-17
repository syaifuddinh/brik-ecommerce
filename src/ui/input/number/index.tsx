import { useState } from "react";
import { BaseInputType } from "interfaces/input";
import TextInput from "ui/input/text";
import { formatMoney } from "utils/string";

const NumberInput = ({ value, onChange, placeholder, label, isOptional }: BaseInputType) => {
    const [dataValue, setDataValue] = useState("");

    const convertMoneyToNumber = (val: string): string => {
        if(!val) return "0";
        return val.replace(/,/g, "");
    }

    const onDataChange = (newVal: string) => {
        const numericValue = newVal.replace(/[^0-9]/g, '');
    
        // Format the numeric value with a money separator
        const formattedValue = formatMoney(numericValue);

        // Update the state with the formatted value
        setDataValue(formattedValue);
        onChange(convertMoneyToNumber(formattedValue));
    }

    return (
            <TextInput
                label={label}
                placeholder={placeholder}
                isOptional={isOptional}
                value={dataValue}
                onChange={(val: string) => onDataChange(val)}
            />
    )
}

export default NumberInput