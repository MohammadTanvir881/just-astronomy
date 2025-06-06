"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// create books
export const createBooks = async (data: FieldValues) => {
  const token = (await cookies()).get("token")?.value;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};

// get all books
export const getAllBooks = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/books`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const result = await res.json();

    return result;
  } catch (err: any) {
    return Error(err);
  }
};
