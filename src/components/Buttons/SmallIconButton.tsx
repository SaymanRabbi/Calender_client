import React, { ButtonHTMLAttributes } from 'react';

import styles from '@/styles/components/Buttons/Button.module.scss';

interface Props {
    icon: JSX.Element;
    disabled?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    className?: string;
    onClick?: VoidFunction;
}

export default function SmallIconButton({
    type,
    className,
    icon,
    disabled,
    onClick,
}: Props) {
    return (
        <button
            type={type ?? 'button'}
            onClick={onClick}
            className={`${className} ${styles['small__icon--button']} `}
            disabled={disabled}
        >
            {icon}
        </button>
    );
}

SmallIconButton.defaultProps = {
    type: 'button',
    className: '',
    onClick: undefined,
    disabled: false,
};
