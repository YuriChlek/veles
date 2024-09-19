import Image from "next/image";
import logo from '../../../web/images/logo.png';
import React from "react";

interface logoProps {
    width: number | 50,
    height: number | 50,
    className: string
}

export const Logo: React.FC = ({width, height, className}: logoProps): React.JSX.Element => {
    console.log(className)
    return (
        <>
            <Image src={logo}
                   alt="logo"
                   width={width}
                   height={height}
                   className={className}
            />
        </>
    );
};

export default Logo;
