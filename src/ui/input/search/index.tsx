import React from 'react';
import TextInput from "ui/input/text";
import { InputType } from "interfaces/input"
import SearchIcon from "assets/icons/search.svg";

function SearchInput({ value, onChange }: InputType) {
    const rightDecorator = (
        <img
            src={SearchIcon}
            alt="search-icon"
            style={{height: "1.5rem", width: "auto"}}
        />
    )

  return (
    <TextInput
        placeholder="Search product...."
        value={value}
        rightDecorator={rightDecorator}
        onChange={onChange}
    />
  );
}

export default SearchInput;
