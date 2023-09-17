import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { InputType } from "interfaces/input"
import SelectInput from "../select"
import ProductCategoryService from "services/ProductCategoryService"
import { SelectListType } from "interfaces/select"

function ProductCategoryInput({ value, onChange }: InputType) {
    const [options, setOptions] = useState([] as SelectListType[]);

    const getData = async () => {
        try {
            const service = new ProductCategoryService();
            const { data } = await service.get();
            const { list } = data;
            setOptions(
                list.map((item: any) => {
                    const value = item.id;
                    const label = item.title;

                    return { value, label }
                })
            );
        } catch {

        }
    }

    useEffect(() => {
        getData()
    }, []);

  return (
       <SelectInput
            label="Product category"
            placeholder="Select one of category"
            value={value}
            onChange={onChange}
            options={options}
       />
  );
}

export default ProductCategoryInput;
