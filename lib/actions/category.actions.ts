"use server";

import { databases } from "../appwrite.config";

export const getCategories = async () => {
    try {
        const categories = await databases.listDocuments(
            process.env.DATABASE_ID!, 
            process.env.CATEGORIES_COLLECTION_ID!
        );

        return categories;
    } catch (error) {
        console.log("Fetching Categories failed" , error);
    }
}