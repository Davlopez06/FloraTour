import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MyContextData {
  value: string;
  handleChangeValue: (newValue: string) => void;
}

interface MyComponentProps {
    children: ReactNode;
  }

const MyContext = createContext<MyContextData | undefined>(undefined);

const MyContextProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [value, setValue] = useState('');
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [empy,setEmpy] = useState(false)

  const handleChangeValue = (newValue: string) => {
    setValue(newValue);
  };

  const contextValues: MyContextData = {
    value,
    handleChangeValue,
  };

  return (
    <MyContext.Provider value={contextValues}>
      {children && React.Children.only(children)}
    </MyContext.Provider>
  );
};

const useMyContext = (): MyContextData => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};

export { MyContextProvider, useMyContext };
