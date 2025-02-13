import * as React from "react";
import { userValidationForm } from "@/lib/validation";
import { useNavigate } from "react-router";
import { UserProps } from "../profile/useGetProfile";

const useLoginForm = () => {
  const [formData, setFormData] = React.useState<UserProps>({
    id: Math.round(Math.random() * 1000),
    username: "",
    password: "",
    fullname: "User",
  });
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    const validatedFields = userValidationForm(
      formData.username,
      formData.password,
      formData?.fullname ?? "User"
    );
    if (!validatedFields) {
      setError("All fields must be at least 6 characters long");
      return;
    }
    setError(null);
    const { username, password } = formData;
    // simpan di local storeg
    localStorage.setItem("user", JSON.stringify({ username, password }));
    // redirect jika sudah tersimpan
    navigate("/");
  };

  return {
    formData,
    error,
    handleChange,
    handleSubmit,
  };
};

export default useLoginForm;
