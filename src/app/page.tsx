import React, { useState, useEffect } from 'react';
import Image from "next/image";

async function getUsers() {
  const users = await fetch('http://127.0.0.1:8000/users/');

  if(!users.ok) {
    throw new Error('Failed to fetch users');
  }

  return users.json();
}


export default async function Home() {
  const users = await getUsers();
  console.log(users);

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
