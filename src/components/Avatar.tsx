import Image from "next/image";
import React from "react";

type Props = {
    img: string;
    alt?: string;
};

const Avatar: React.FC<Props> = ({ img, alt }) => {
    return (
        <div className="rounded-full overflow-hidden w-full pt-[100%] relative">
            <div className="absolute inset-0">
                <Image
                    src={img}
                    alt={alt || img}
                    width={32}
                    height={32}
                />
            </div>
        </div>
    );
};

export default Avatar;