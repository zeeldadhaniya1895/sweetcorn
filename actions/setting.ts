"use server";

import * as z from "zod"
import { SettingSchema } from "@/app/(auth)/schemas"; 
import { db } from "@/app/(auth)/lib/db";
import { getUserByEmail, getUserById } from "@/app/(auth)/data/user";
import { currentUser } from "@/app/(auth)/lib/auth";
import { generateVerificationToken } from "@/app/(auth)/lib/tokens";
import { sendVerificationEmail } from "@/app/(auth)/lib/mail";
import bcrypt from "bcryptjs";
import { unstable_update } from "@/auth";

export const setting=async(values:z.infer<typeof SettingSchema>)=>{

    const user=await currentUser();

    if(!user)
    {
        return {error:"Unauthorized"}
    }


    const dbUser=await getUserById(user.id as string);

    if(!dbUser){
        return{error:"Unauthorized"}
    }

    if(user.isOAuth)
    {
        values.email=undefined;
        values.password=undefined;
        values.newPassword=undefined;
        values.isTwoFactorEnabled=undefined;
    }

    if(values.email &&values.email!==user.email)
    {
       const existingUser = await getUserByEmail(values.email) ;

       if(existingUser&& existingUser.id!==user.id){
        return {error:"Email already in use!"}
       }
       const verificationToken = await generateVerificationToken(values.email,dbUser.email);
       await sendVerificationEmail(verificationToken.email,verificationToken.token);
       return {success:"Verification email sent "}
    }

    if(values.password && values.newPassword && dbUser.password)
    {
        const passwordMatch= await bcrypt.compare(values.password,dbUser.password)
        if(!passwordMatch)
        {
            return{error:"Incorrect Password!"}
        }
        const hashedPassword=await bcrypt.hash(values.newPassword,10)

        values.password=hashedPassword;
        values.newPassword=undefined;
    }

    const updatedUser=await db.user.update({
        where:{
            id:dbUser.id
        },
        data:{
            ...values,
        }
    })
    unstable_update({
        user:{
            ...updatedUser,
        }
    })
    return {success:"profile updated"}
}
