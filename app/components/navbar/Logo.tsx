"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <Image
            alt="logo"
            onClick={() => router.push("/")}
            className="hidden cursor-pointer md:block"
            src="/images/logo.png"
            height={100}
            width={100}
        />
    );
};

export default Logo;
