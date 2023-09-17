import React from 'react';
import { useState } from 'react';
import { FileInputType } from "interfaces/input"

function FileInput({ label, onChange }: FileInputType) {
    const [image, setImage] = useState("");

    const onFileChange = (e: any) => {
        const file = e.target.files[0];
        setImagePreview(file);
        if(!onChange) return;
        onChange(file);
    }

    const setImagePreview = (file: any) => {
        const reader = new FileReader();
        reader.onload = e => {
            setImage(e?.target?.result as string);
        }

        reader.readAsDataURL(file);
    }

  return (
    <div className="file-container text-input-container">
        {  label && (
            <div className="text-input-container_label">
                { label }
            </div>
        ) }

        {
            image && (
                <div className="file-container_image">
                    <img
                        src={image}
                        alt="image-preview"
                        loading="lazy"
                    />
                </div>
            )
        }

        <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
        />
    </div>
  );
}

export default FileInput;
