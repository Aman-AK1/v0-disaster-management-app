"use client"

import { createContext, useContext, useState } from "react"

const UserContext = createContext(undefined)

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Aman",
    email: "aman@example.com",
    phone: "+91-9876543210",
    location: "Lachen, Sikkim",
    emergencyContact: "Priya Sharma - +91-9876543211",
  })

  const updateUser = (userData) => {
    setUser((prev) => ({ ...prev, ...userData }))
  }

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
