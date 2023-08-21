import React, { ChangeEvent } from 'react';

import styles from '@/styles/components/Buttons/Button.module.scss';


interface ImageUploadProps {
    // eslint-disable-next-line no-unused-vars
    onImageSelect: (file: File) => void;
    text: string;
    className?: string;
}


export default function ImageUpload({ onImageSelect, text, className, }: ImageUploadProps) {

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageSelect(file);
        }
    };
    return (
        <div>
            <label htmlFor='avater' className={`${styles['button-small']} ${className}`}>
                {text}
                <input
                    id='avater'
                    className='hidden '
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </label>
        </div>
    );
}


ImageUpload.defaultProps = {
    className: '',
};
