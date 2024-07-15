import React, { useState, useEffect } from "react";

async function getUsers() {
  const users = await fetch("http://127.0.0.1:8000/users/");

  if (!users.ok) {
    throw new Error("Failed to fetch users");
  }

  return users.json();
}

async function getCoffeeShops() {
  const coffeeShops = await fetch("http://localhost:8000/coffee_shops/");

  if (!coffeeShops.ok) {
    throw new Error("Failed to fetch coffee shops");
  }

  return coffeeShops.json();
}

export default async function Home() {
  const users = await getUsers();
  const coffee_shops = await getCoffeeShops();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul>
        {users.map((user: any, index: any) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
      <ul>
        {coffee_shops.map((coffee_shop: any, index: any) => {
          return <li key={index}>{coffee_shop.name}</li>;
        })}
      </ul>
    </main>
  );
}
