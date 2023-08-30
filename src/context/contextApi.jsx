/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";

import { fetchAPI } from "../utils/fetchAPI";

export const Context = createContext();

export const AppContext = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <Context.Provider
            value={{
                loading,
                setLoading,
                videos,
                setVideos,
                selectedCategory,
                setSelectedCategory,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {children}
        </Context.Provider>
    );
};