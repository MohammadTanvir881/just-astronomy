"use server"
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from 'react-hook-form';



// login user
export const loginUser = async (userData: FieldValues) => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      const result = await res.json();
      if (result.success) {
        (await cookies()).set('token', result.data.token);
      }
  
      return result;
    } catch (err: any) {
      return Error(err);
    }
  };



// logout user
export const logoutUser = async () => {
    try {
      (await cookies()).delete('token');
      return { success: true, message: 'Logout successful' };
    } catch (err: any) {
      return { success: false, message: 'Logout failed', error: err.message };
    }
  };

  // get all users
  export const getAllUsers = async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        cache: 'no-store',
      });
  
      const result = await res.json();
  
      return result;
    } catch (err: any) {
      return Error(err);
    }
  };
export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get('token')?.value;
    let decodedData = null;
    if (accessToken) {
      decodedData = await jwtDecode(accessToken);
      return decodedData;
    }
    return null;
  };
  