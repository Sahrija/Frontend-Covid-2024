import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { fetchGlobalData } from '../services/covidApi';

export const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchGlobalData()
            .then((res) => {
                setGlobalData(res)
            })
            .catch((error) => {
                console.error('Error fetching the data', error);
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    return (
        <GlobalDataContext.Provider value={globalData}>
            {children}
        </GlobalDataContext.Provider>
    );
};
