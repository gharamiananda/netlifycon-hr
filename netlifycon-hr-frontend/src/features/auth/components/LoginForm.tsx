import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import loginImg from "../../../assets/login-anime.json";
import { AuthForm } from "./AuthForm";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 shadow-none bg-white">
        <CardContent className="grid p-0 md:grid-cols-2 gap-2">
          <AuthForm />
          <div className="bg-muted relative hidden md:flex h-full ">
            <Lottie
              className="flex self-end"
              height="100%"
              animationData={loginImg}
              loop={true}
              autoplay={true}
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
