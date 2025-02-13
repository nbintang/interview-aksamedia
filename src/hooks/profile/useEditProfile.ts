import React from "react";
import useGetProfile, { UserProps } from "./useGetProfile";
import { userValidationForm } from "@/lib/validation";
import { useNavigate } from "react-router";

const useUpdateProfile = () => {
  const profile = useGetProfile();
  const [formData, setFormData] = React.useState<UserProps | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (profile)
      setFormData({
        ...profile,
      });
  }, [profile]);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!formData) return;

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    const validatedFields = userValidationForm(
      formData.username,
      formData.password
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

  return { profile: formData, error, handleChange, handleSubmit };
};

export default useUpdateProfile;
