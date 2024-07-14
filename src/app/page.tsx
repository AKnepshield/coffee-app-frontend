import React, { useState, useEffect } from 'react';
import Image from "next/image";

async function getUsers() {
  const users = await fetch("http://127.0.0.1:8000/users");

  if (!users.ok) {
    throw new Error("Failed to fetch users");
  }
}

async function getCoffeeShops() {
  const response = await fetch("http://127.0.0.1:8000/coffee_shops");

  if (!response.ok) {
    throw new Error("Failed to fetch coffee shops");
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
  const users = await fetch('http://127.0.0.1:8000/users/');

  if(!users.ok) {
    throw new Error('Failed to fetch users');
  }

  return users.json();
}


export default async function Home() {
  const users = await getUsers();

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>
        {users.map((user: any, index: any) => {
          return (
              <li key={index}>{user.name}</li>
          )
        })}
        </ul>
      </main>
    );

}
