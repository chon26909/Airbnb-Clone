"use client";

import React, { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

const Button: FC<ButtonProps> = (props) => {
    const { label, onClick, disabled, outline, small, icon: Icon } = props;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`translate relative w-full rounded-lg 
        hover:opacity-80 
        disabled:cursor-not-allowed disabled:opacity-70
        ${outline ? "border-black bg-white text-black" : "border-rose-500 bg-rose-500 text-white"}
        ${small ? "border-[1px] py-1 text-sm font-light" : "text-md border-2 py-3 font-semibold"}
        `}
        >
            {Icon && <Icon size={24} className="absolute left-4 top-3" />}
            {label}
        </button>
    );
};

export default Button;
