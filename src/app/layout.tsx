import Button from "@/components/UI/Button";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { NextPageContext } from "next";

export const metadata = {
  title: "Raccoon",
  description: "Тот самый енот",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data: any = await getData();
  return (
    <html lang="ru">
      <body className="font-rubik">
        <div className="h-10 flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300 ">
          <Link href={data.link} className="font-bold text-white">
            {data.content}
          </Link>
        </div>
        <nav className="container mx-auto h-[100px] flex items-center max-md:px-2">
          <div className="flex items-center gap-1">
            <Image src="/raccoon-logo.png" width={32} height={32} alt="logo" />
            <p className="font-bold text-2xl">{data.title_navbar}</p>
            <small className="text-xs pt-3">{data.version_navbar}</small>
          </div>
          <div className="mx-auto" />
          <Link href="https://rubycats.gitbook.io/dock-of-raccoon">
            <Button>Документация</Button>
          </Link>
        </nav>
        <div className="container mx-auto">{children}</div>
        {/* <footer className="text-center">
          Raccoon - язык программирования | {new Date().getFullYear() + 1}
        </footer> */}
      </body>
    </html>
  );
}

async function getData() {
  const res = await fetch(
    "https://api.cosmicjs.com/v3/buckets/raccoon-production/objects/646db9dc7a2aca00083aec66?read_key=vRqh2Se9jx6n0jQq5xOV9d6httEfgUntNOCia9jXL0oaPzwKuE&depth=1&props=metadata"
  );
  const data = await res.json();
  const { metadata } = data.object;
  return metadata;
}
