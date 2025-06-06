"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// create megazine
export const createMegazine = async (data: FieldValues) => {
  const token = (await cookies()).get("token")?.value;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/megazine`, {
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

// get all megazines
export const getAllMegazines = async () => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/megazine`, {
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
