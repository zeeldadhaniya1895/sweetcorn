"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserButton from "@/components/auth/user-button";



export default function Navbar() {
  const { data: session, status } = useSession();
  

  return (

    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-[#043A3A] flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <div className="relative left-2 hidden md:block">
                    <span className="text-white font-bold ">Sweet</span><span className="text-[#2FB95D] font-bold">Corn</span>
                </div>

                {!(status==="authenticated") ? <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <Button size="sm" variant="outline" asChild >
                        <Link href="/auth/login">
                            Login
                        </Link>

                    </Button>
                    <Button size="sm" asChild>
                        <Link href="/sign-in">
                           SignUp
                        </Link>

                    </Button>
                </div>: <UserButton/>}

                
            </div>
        </div>
  )
}
