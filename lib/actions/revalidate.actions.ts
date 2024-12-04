"use server";

import { revalidatePath } from "next/cache";

export const revalidateHomePage = async () => {
    try {
        revalidatePath("/");
    } catch (error) {
        console.error("Revalidation failed", error);
    }
};
