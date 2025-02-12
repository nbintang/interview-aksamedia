import LoginForm from "@/components/sections/auth/login";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function LoginPages() {
  return (
    <main className="grid min-h-screen place-items-center">
      <Card className="lg:w-[350px] w-full">
        <CardHeader>
          <CardTitle>Login to your account!</CardTitle>
          <CardDescription>
            Start your day by logging in this form
          </CardDescription>
        </CardHeader>
        <CardContent>
            <LoginForm/>
        </CardContent>
      </Card>
    </main>
  );
}
