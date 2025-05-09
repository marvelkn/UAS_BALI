import { createContext, useState } from 'react';

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
    // const initialHealth = parseInt(localStorage.getItem('progress')) || 100;
    const [health, setHealth] = useState(100);

    return (
        <HealthContext.Provider value={{ health, setHealth }}>
            {children}
        </HealthContext.Provider>
    );
};
