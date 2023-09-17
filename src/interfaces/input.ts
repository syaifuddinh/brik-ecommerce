import { SelectListType } from "./select";

export type InputType = {
    value: string | number;
    onChange: (value: string) => void;
}

export type BaseInputType=  {
    label?: string;
    isOptional?: boolean;
    placeholder: string;
} & InputType

export type TextInputType=  {
    rightDecorator?: any;
    type?: "text" | "password";
} & BaseInputType

export type FileInputType = {
    label: BaseInputType["label"];
    onChange: (data: typeof File) => ReturnType<InputType["onChange"]>;
}

export type SelectInputType = {
    options: SelectListType[];
    onChange: (value: string, valueObject: SelectListType) => ReturnType<InputType["onChange"]>;
} & BaseInputType;