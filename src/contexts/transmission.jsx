import { createContext, useContext } from 'react';

const TransmissionContext = createContext({});

export const TransmissionProvider = ({ children }) => {
    return (
        <TransmissionContext.Provider
            value={{ transmission_id: 1, title: 'Lorem is Live now!' }}
        >
            {children}
        </TransmissionContext.Provider>
    );
};

export const useTransmission = () => {
    const context = useContext(TransmissionContext);
    if (context === undefined) {
        throw new Error('useTransmission must be used within a CountProvider');
    }
    return context;
};

export default TransmissionContext;
