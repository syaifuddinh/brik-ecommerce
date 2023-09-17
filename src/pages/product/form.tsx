import React from 'react';
import TextInput from "ui/input/text";
import FileInput from "ui/input/file";
import NumberInput from "ui/input/number";
import DescriptionInput from "ui/input/description";
import ProductCategoryInput from "ui/input/productCategory";

import FormConstructor from "./form.constructor"
import { useState } from "react"
import { useEffect } from "react"
import { Product } from "interfaces/product";

type ProductFormType = {
    onChange: (value: Product) => void;
}

const ProductForm = ({ onChange }: ProductFormType) => {
  const [payload, setPayload] = useState({...FormConstructor.payload}) ;
  const onUpdatePayload = () => {
    setPayload({...FormConstructor.payload});
    if(!onChange) return;
    onChange({...FormConstructor.payload} as Product)
  }

  useEffect(() => {
    return () => {
        FormConstructor.reset()
    }
  }, [])

  return (
    <div className="product-form">
        <div className="row">
            <div className="col">
                    <TextInput
                        label="SKU"
                        placeholder="Ex : 000102312...."
                        onChange={(val: string) => {
                            FormConstructor.setSku(val)
                            onUpdatePayload();
                        }}
                        value={payload.sku}
                    />

                    <TextInput
                        label="Product name"
                        placeholder="Ex : Wardrobe / Curtain / etc"
                        onChange={(val: string) => {
                            FormConstructor.setTitle(val)
                            onUpdatePayload();
                        }}
                        value={payload.title}
                    />

                    <ProductCategoryInput
                        value={payload.categoryId}
                        onChange={(val: string) => {
                            FormConstructor.setCategoryId(val)
                            onUpdatePayload();
                        }}
                    />

                    <DescriptionInput
                        label="Description"
                        placeholder="Ex : This product could be......."
                        onChange={(val: string) => {
                            FormConstructor.setDescription(val)
                            onUpdatePayload();
                        }}
                        value={payload.description as string}
                    />

            </div>
            <div className="col">
                <FileInput
                    label="Upload thumbnail"
                    onChange={(val: typeof File) => {
                        FormConstructor.setThumbnail(val)
                        onUpdatePayload();
                    }}
                />

                <NumberInput
                    label="Price"
                    placeholder="Ex: 500.000"
                    value={payload.price}
                    onChange={(val: string) => {
                        console.log(parseInt(val))
                        FormConstructor.setPrice(parseInt(val))
                        onUpdatePayload();
                    }}
                />

                <div className="row">
                    <div className="col">
                        <NumberInput
                            label="Weight"
                            placeholder="Ex: 500"
                            isOptional={true}
                            value={payload.weight}
                            onChange={(val: string) => {
                                FormConstructor.setWeight(parseInt(val))
                                onUpdatePayload();
                            }}
                        />
                        
                        <NumberInput
                            label="Width"
                            placeholder="Ex: 5"
                            isOptional={true}
                            value={payload.width}
                            onChange={(val: string) => {
                                FormConstructor.setWidth(parseInt(val))
                                onUpdatePayload();
                            }}
                        />
                        
                    </div>
                    <div className="col">
                        
                        <NumberInput
                            label="Length"
                            placeholder="Ex: 5"
                            isOptional={true}
                            value={payload.length}
                            onChange={(val: string) => {
                                FormConstructor.setLength(parseInt(val))
                                onUpdatePayload();
                            }}
                        />


                        <NumberInput
                            label="Height"
                            placeholder="Ex: 5"
                            isOptional={true}
                            value={payload.height}
                            onChange={(val: string) => {
                                FormConstructor.setHeight(parseInt(val))
                                onUpdatePayload();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default ProductForm;
