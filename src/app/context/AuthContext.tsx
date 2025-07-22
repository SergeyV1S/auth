/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useMemo } from "react";

interface IAuthContextProps {
  isAuth?: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const AuthContext = React.createContext<IAuthContextProps>({
  isAuth: undefined,
  setIsAuth: () => {}
});

interface IAuthProviderProps {
  children: React.ReactNode;
  defaultValue?: boolean;
}

export const AuthProvider = ({ children, defaultValue }: IAuthProviderProps) => {
  const [isAuth, setIsAuth] = React.useState<boolean | undefined>(defaultValue);

  const value = useMemo(() => ({ isAuth, setIsAuth }), [isAuth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthState = () => React.useContext(AuthContext);
