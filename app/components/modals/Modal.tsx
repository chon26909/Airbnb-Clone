"use client";

import { ReactElement, FC, useState, useCallback, useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: ReactElement;
    footer?: ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}

const Modal: FC<ModalProps> = (props) => {
    const { isOpen, onClose, onSubmit, title, body, footer, actionLabel, disabled, secondaryAction, secondaryLabel } = props;
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) return;

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) return;

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecoundaryAction = useCallback(() => {
        if (disabled || !secondaryAction) return;

        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) return null;

    return (
        <>
            <div
                className="
            fixed inset-0 z-50 
            flex items-center justify-center overflow-y-auto overflow-x-hidden 
            bg-neutral-800/70 outline-none focus:outline-none"
            >
                <div
                    className="relative mx-auto my-6 h-full w-full 
                md:h-auto md:w-4/6 lg:h-auto lg:w-3/6 xl:w-3/6"
                >
                    <div className={`
                        transition
                        duration-300
                        h-full
                        ${}
                    `}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
