/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";

import { fetchAPI } from "../utils/fetchAPI";

export const Context = createContext();

export const AppContext = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    // useEffect(() => {

    //     fetchSelectedCategoryData(selectedCategory);
    // }, [selectedCategory]);

    const fetchSelectedCategoryData = async (query) => {
        setLoading(true);
        const data = await fetchAPI(`search?part=snippet&q=${query}`)
        console.log(data);
        setVideos(data);
        console.log(videos);
        setLoading(false);
    };

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