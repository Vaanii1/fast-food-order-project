//const API_URL = "http://localhost:9500";

import supabase from "./supabase";

export async function getMenu() {
  // const res = await fetch(`${API_URL}/menu`);

  // // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  // if (!res.ok) throw Error("Failed getting menu");

  // const data = await res.json();
  // return data;

  ///Using supabase
  let { data: menu, error } = await supabase.from("menu").select("*");

  //if there's an error
  if (error) {
    console.error(error);
    throw new Error("Menu could not be loaded: " + error.message);
  }
  //if there are no errors, return the data
  return menu;
}

export async function getOrders() {
  ///Using supabase
  let { data: orders, error } = await supabase.from("order").select("*");

  //if there's an error
  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded: " + error.message);
  }
  //if there are no errors, return the data
  return orders;
}

export async function getOrder(id) {
  // const res = await fetch(`${API_URL}/order/${id}`);
  // if (!res.ok) throw Error(`Couldn't find order #${id}`);

  // const data = await res.json();
  // return data;

  //get order supabase
  const { data, error } = await supabase
    .from("order")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded: " + error.message);
  }

  // getOrders();

  //return the order
  return data;
}

export async function createOrder(newOrder) {
  // try {
  //   const res = await fetch(`${API_URL}/order`, {
  //     method: "POST",
  //     body: JSON.stringify(newOrder),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!res.ok) throw Error();
  //   const data = await res.json();
  //   return data;
  // } catch {
  //   throw Error("Failed creating your order");
  // }

  //Using supabase
  //Insert the order
  const { data, error } = await supabase
    .from("order")
    .insert([newOrder])
    .select();
  //if there's an error
  if (error) {
    console.error(error);
    throw new Error("Order could not be loaded: " + error.message);
  }
  console.log(error);
  //return new data
  return data;
}

export async function updateOrder(id, updateObj) {
  // try {
  //   const res = await fetch(`${API_URL}/order/${id}`, {
  //     method: "PATCH",
  //     body: JSON.stringify(updateObj),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!res.ok) throw Error("");
  //   // We don't need the data, so we don't return anything
  // } catch (err) {
  //   throw Error("Failed updating your order: " + err);
  // }
  //update order
  const { data, error } = await supabase
    .from("order")
    .update(updateObj)
    .eq("id", id)
    .select();
  //if there's an error
  if (error) {
    console.error(error);
    throw new Error("Order could not be loaded: " + error.message);
  }
  //console.log(error);
  //return the updated object
  return data;
}
