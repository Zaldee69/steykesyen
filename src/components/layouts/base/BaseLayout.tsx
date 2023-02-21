import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Head from "next/head";
import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
  metaName?: string;
  metaContent?: string;
};

const BaseLayout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar isOpen={isOpen} />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="md:px-24 px-5">{children}</main>
    </>
  );
};

export default BaseLayout;
