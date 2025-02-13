import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLoginForm from "@/hooks/auth/useLoginForm";

export default function LoginForm() {
  const { error, handleChange, handleSubmit } = useLoginForm();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:space-y-2 space-y-4 "
    >
      <div>
        <Label htmlFor="username" className="dark:text-white">Username</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="username"
          className="dark:bg-black dark:text-white dark:placeholder:text-white"
          id="username"
          placeholder="Type your username"
        />
      </div>
      <div>
        <Label htmlFor="password" className="dark:text-white">Password</Label>
        <Input
          onChange={handleChange}
          type="password"
          
          className="dark:bg-black dark:text-white dark:placeholder:text-white"
          name="password"
          id="password"
          placeholder="Type your password"
        />
      </div>
      <span className="text-destructive text-sm">{error}</span>
      <Button type="submit">Login</Button>
    </form>
  );
}
