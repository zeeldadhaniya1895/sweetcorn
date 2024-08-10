"use client"
import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    const pathname= usePathname();
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shaow-sm">
        <div className="flex gap-x-2">
            <Button
            asChild
            variant={pathname==="/settings"?"default":"outline"}
            >
                <Link href="/settings">Setting</Link>
            </Button>
            
            
        </div>
       <UserButton/>
    </nav>

  )
}
