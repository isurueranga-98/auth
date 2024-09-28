'use client'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react"
import { DEFALT_LOGIN_REDIRECT } from "@/routes"


export const Social = () => {
  // const onClick = (provider: "google" | "github") => {
  //   signIn(provider, {
  //     callbackUrl: DEFALT_LOGIN_REDIRECT,
  //   });
  // }


  const onClick = async (provider: "google" | "github") => {
    try {
      console.log("Initiating sign-in with provider:", provider);
      const result = await signIn(provider, {
        callbackUrl: DEFALT_LOGIN_REDIRECT,
      });
      console.log("Sign-in result:", result);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };
  
  
  return (
    <div>
        <Button size="lg" variant='outline' onClick={()=> onClick("google")} ><FcGoogle/></Button>
        <Button size="lg" variant='outline' onClick={()=> onClick("github")} ><FaGithub/></Button>
    </div>
  )
}