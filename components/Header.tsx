"use client"

import { SignedIn, SignedOut, SignInButton, useAuth, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs"
import { Button } from "./ui/button";

export default function Header(){
    const { user } = useUser();
    const data = useAuth();
    console.log(user);
    console.log("data: ", data); 
    return <div className="w-full bg-zinc-200 py-2 px-3">
        <div className="flex justify-between">
        {!user &&  <Button className="">
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </Button>}
        
        {user && <div className="order-1 w-10 grid place-items-center rounded-full bg-zinc-700">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>    
                </div>
        }
        {user && <div>
            <h1 className="bg-zinc-100 rounded-lg p-2 font-bold"> {user?.firstName} 's kingdom </h1>
        </div>}
        </div>
    </div>
}