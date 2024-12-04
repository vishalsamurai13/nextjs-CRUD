/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useContext, useEffect } from "react";
import Category from "./Category";
import { CategoryContext } from "@/context/CategoryContext";

const Categories = ({ categories }: { categories: any }) => {
    const {changeCategory} = useContext(CategoryContext);
    useEffect(() => {
        changeCategory(categories[0].$id)
    }, [])
  return (
    <div className="flex w-full py-4 items-start gap-4">
      {categories?.map((category: any) => (
        <div key={category.$id}>
          <Category cat={category} />
        </div>
      ))}
    </div>
  );
};

export default Categories;
