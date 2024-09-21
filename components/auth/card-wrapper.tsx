'use clent'

import { Card, CardContent,CardFooter,CardHeader } from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { BckButton } from "@/components/auth/back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

export const CardWrapper = ({ children, headerLabel, backButtonLabel, backButtonHref, showSocial}: CardWrapperProps) => {
  return(
    <div> 
      <Card className=" w-[400px] shadow-md">
        <CardHeader>
          <Header label={headerLabel}/>
        </CardHeader>


        <CardContent>
          {children}
        </CardContent>

        {showSocial && (
          <CardFooter>
            <Social/>
          </CardFooter>
        )}

        <CardFooter>
          <BckButton label={backButtonLabel} href={backButtonHref}/>
        </CardFooter>

      </Card>
    </div>
  )
}