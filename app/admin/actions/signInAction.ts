"use server";

import { redirect } from "next/navigation";

export const signInAction = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    console.log(username, password)
    /*const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return encodedRedirect("error", "/sign-in", error.message);
    }*/

    return redirect("/dashboard");
};