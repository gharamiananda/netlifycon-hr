"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react"; // Optional: You can use any icon library

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import Logo from "@/components/Logo";

// 1. Schema
const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AuthFormValues = z.infer<typeof loginSchema>;

export function AuthForm() {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });
  const navigate = useNavigate();

  // 3. Submit handler
  const onSubmit = async (data: AuthFormValues) => {
    try {
      await login(data);
      toast.success("user is login succssfully!");
      navigate("/dashboard");
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error ? error.message : "Something went wrong!";
      toast.error(errMsg);
    }
  };

  // 4. UI
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-8">
        <div className="flex flex-col gap-8 items-center">
          <Logo />
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold text-[#673ab7]">
              Hi, Welcome Back
            </h1>
            <p className="text-muted-foreground text-balance">
              Enter your credentials to continue
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-3 ">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="********"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer"
                          tabIndex={-1}
                        >
                          {!showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Link aria-disabled className="text-right" to="/">
              Forgot Password?
            </Link>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}
