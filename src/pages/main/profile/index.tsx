import EditProfileForm from "@/components/sections/main/profile-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Profile() {
  return (
    <main className="mx-auto grid min-h-[calc(80vh-3rem)] place-items-center container">
      <Card className="lg:w-[350px] w-full  border-0 lg:border shadow-none lg:shadow">
        <CardHeader>
          <CardTitle>Edit your account</CardTitle>
          <CardDescription>
            Please fill in the form below to edit your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-[100px] h-[100px] mx-auto sm:mx-0 sm:mr-auto lg:mx-auto  mb-5">
            <img src="/user.jpeg" alt="user" className="rounded-full" />
          </div>
          <EditProfileForm />
        </CardContent>
      </Card>
    </main>
  );
}
