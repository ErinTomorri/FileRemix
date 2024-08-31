import React, { createContext, useContext, useState, useEffect } from 'react';

type Plan = 'basic' | 'premium';

interface User {
  id: string;
  name: string;
  email: string;
  plan: Plan;
  conversionsLeft: number;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        // In a real app, this would be an API call
        const response = await fetch('/api/user');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData: User = await response.json();
        setUser(userData);
      } catch (err) {
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}