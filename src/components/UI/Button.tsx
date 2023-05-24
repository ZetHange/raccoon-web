import React from "react";

interface Props {
  args?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  children: React.ReactNode;
  backgroundColor?: string;
}

const Button: React.FC<Props> = ({
  args,
  children,
  backgroundColor = "bg-gray-950",
}) => {
  return (
    <button
      {...args}
      className={`p-2 ${backgroundColor} rounded-xl text-white font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
