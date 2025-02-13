import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUpdateProfile from "@/hooks/profile/useEditProfile";

export default function EditProfileForm() {
  const { error, handleChange, handleSubmit, profile } = useUpdateProfile();
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
          value={profile?.username}
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
          value={profile?.password}
          id="password"
          placeholder="Type your password"
          disabled
        />
               <p className="text-muted-foreground text-xs">password cannot be changed</p>
      </div>
      <span className="text-destructive text-sm">{error}</span>
      <Button type="submit">Login</Button>
    </form>
  );
}
