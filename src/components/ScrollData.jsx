import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [data, setData] = useState(null);
    
    return (
        <ScrollContext.Provider value={{data, setData}}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollData = () => {
    return useContext(ScrollContext);
};