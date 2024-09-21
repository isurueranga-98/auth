import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2">
    
    <LoginButton>
      <Button variant='secondary' size='lg'>Click me</Button>
    </LoginButton>
    
   </div>
  );
}
