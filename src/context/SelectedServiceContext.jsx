import { createContext, useContext, useState } from 'react';

const SelectedServiceContext = createContext();

export const SelectedServiceProvider = ({ children }) => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <SelectedServiceContext.Provider value={{ selectedService, setSelectedService }}>
            {children}
        </SelectedServiceContext.Provider>
    );
};

export const useSelectedService = () => {
    return useContext(SelectedServiceContext);
};
