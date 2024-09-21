'use client'

import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"


export const Social = () => {
  return (
    <div>
        <Button size="lg" variant='outline' onClick={()=> {}} ><FcGoogle/></Button>
        <Button size="lg" variant='outline' onClick={()=> {}} ><FaGithub/></Button>
    </div>
  )
}