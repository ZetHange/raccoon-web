import React from "react";

interface Props {
  about: string;
  children: React.ReactNode;
  emoji: string;
}

const Feature: React.FC<Props> = ({ about, children, emoji }) => {
  return (
    <div className="text-center grid gap-2">
      <p className="text-6xl">{emoji}</p>
      <p className="text-lg font-bold">{about}</p>
      <div>{children}</div>
    </div>
  );
};

export default Feature;
