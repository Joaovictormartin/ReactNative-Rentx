import React, { ReactNode } from 'react';

import { AuthProvider } from './useAuth';

interface AuthProviderProps {
  children: ReactNode;
}

export function AppProvider({ children } : AuthProviderProps) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


//index para centralizar todos os hooks de context