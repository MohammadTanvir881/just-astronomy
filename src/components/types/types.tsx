export type TUser = {
    name: string;
    email: string;
    session : string;
    depertment: string;
    phone: string;
    roll: string;
    password: string;
    role: "user" | "admin";
    isBlocked: boolean;
  };