"use client";
import { FC } from "react";

interface HeadingProps {
    title: string;
    subtitle?: string;
    center?: boolean;
}

const Heading: FC<HeadingProps> = ({ center, title, subtitle }) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className="text-2xl font-bold">{title}</div>
            <div className="mt-2 font-light text-neutral-500">{subtitle}</div>
        </div>
    );
};

export default Heading;
