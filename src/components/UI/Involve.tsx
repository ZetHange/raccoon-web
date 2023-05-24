import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  imageLink: string;
  link: string;
  className?: string;
}

const Involve: React.FC<Props> = ({ title, imageLink, link, className }) => {
  return (
    <Link href={link}>
      <div className="grid text-center items-center justify-center">
        <Image width={100} height={100} src={imageLink} alt={title} />
        <p className={`text-lg text-center ${className}`}>{title}</p>
      </div>
    </Link>
  );
};

export default Involve;
