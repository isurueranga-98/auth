'use client'
import * as z from "zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {useForm} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { login } from "@/action/login";
import { useState, useTransition } from "react";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    
    startTransition(() =>{
      login(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
    })
  }
  return (
    <div>
      <CardWrapper headerLabel="Welcome Back" backButtonLabel="Do not have an account" backButtonHref="/auth/register" showSocial>
      
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <FormField 
                control={form.control}
                name="email"
                render={({field})=>( 
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="email"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage/>  
                  </FormItem>
                )}
                />


              <FormField 
                control={form.control}
                name="password"
                render={({field})=>( 
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="password"
                        type="password"
                      />
                    </FormControl>
                    <FormMessage/>  
                  </FormItem>
                )}
                />
            </div>
            <FormError message={error}/>
            <FormSuccess message={success}/>
            <Button disabled={isPending} type="submit">Login</Button>
          </form>
      </Form>

      </CardWrapper>
    </div>
  );
}