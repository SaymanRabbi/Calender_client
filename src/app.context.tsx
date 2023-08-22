import React, { createContext, useContext, ReactNode, useState } from 'react';

// Define the shape of your context
interface MyContextProps {
  isPopoverOpen:boolean;
  setIsPopoverOpen:Function;
  buttonState:boolean;
  setButtonState:Function;
  pop:boolean;
  setPop:Function;
  updateData: (newData: string) => void;
}
interface MyContextProviderProps {
  children: ReactNode;
}


// Create the context
const MyContext = createContext<MyContextProps | undefined>(undefined);

export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within MyContextProvider');
  }
  return context;
}



// Create a provider component to wrap your app
export function MyContextProvider({ children }: MyContextProviderProps) {
  const [isPopoverOpen,setIsPopoverOpen]=useState<boolean>(false)
  const [buttonState, setButtonState]=useState<boolean>(true)
  const [pop, setPop]=useState<boolean>(false)
  const [capsuleParentLoc, setCapsuleParentLoc]=useState()
  // const [capsuleP, setCapsuleP]=useState(0)
  const [cardContext, setCardContext]=useState(0)

  // const updateData = (newData: string) => {
  //   setData(newData);
  // };

  const contextValue: MyContextProps = {
    isPopoverOpen,
    setIsPopoverOpen,
    buttonState,
    setButtonState,
    pop,
    setPop,
    capsuleParentLoc,
    setCapsuleParentLoc,
    // capsuleP,
    // setCapsuleP,
    cardContext,
    setCardContext,
  };

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}
