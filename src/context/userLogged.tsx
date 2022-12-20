import React from "react";

// O contexto serve para utilizar um dado em varias paginas

interface userLoggedContextDataProps {
  userName: string;
}

// Ao utilizar {} as, forçamos o typescript entender que o meu objeto vázio é o necessario a ser passado como parametro
export const UserLoggedContext = React.createContext<userLoggedContextDataProps>(
  {} as userLoggedContextDataProps
);

export const UserLoggedProvider = ({ children }: any) => {
  return (
    <UserLoggedContext.Provider value={{ userName: "Fernanda" }} children={children}/>
  );
};
