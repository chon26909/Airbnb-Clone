"use client";
import React from "react";
import Container from "../Container";

import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: "Beach",
        icon: TbBeach,
        description: "this property is close to the beach!"
    },
    {
        label: "Windmill",
        icon: GiWindmill,
        description: "This property has windmills!"
    },
    {
        label: "Modern",
        icon: MdOutlineVilla,
        description: "This property is modern!"
    }
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get("category");
    const pathName = usePathname();

    const isMainPage = pathName === "/";

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div className="flex flex-row items-center justify-between overflow-x-auto pt-4">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        description={item.description}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;
