import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLoginForm from "@/hooks/useLoginForm";

export default function LoginForm() {
  const { error, handleChange, handleSubmit } = useLoginForm();
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col [&>div]:flex [&>div]:flex-col [&>div]:space-y-2 space-y-4 "
    >
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          onChange={handleChange}
          type="text"
          name="username"
          id="username"
          placeholder="Type your username"
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={handleChange}
          type="password"
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
