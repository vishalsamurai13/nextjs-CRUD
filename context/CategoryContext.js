"use client";

import { useState, createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({children}) => {
    const [categoryId, setCategoryId] = useState("");

    const changeCategory = (catId) => {
        setCategoryId(catId);
    };

    return (
        <CategoryContext.Provider value={{categoryId, changeCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}