"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/app/config/constants";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [seller, setIsSeller] = useState(false);
  const value = { router, routes, user, setUser, seller, setIsSeller };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
