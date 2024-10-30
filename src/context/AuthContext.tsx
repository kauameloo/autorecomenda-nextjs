'use client'

import React, { createContext, useState, useContext, ReactNode } from 'react'

type User = {
  email: string
  role: 'client' | 'admin'
}

type AuthContextType = {
  user: User | null
  login: (email: string, role: 'client' | 'admin') => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = (email: string, role: 'client' | 'admin') => {
    setUser({ email, role })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}