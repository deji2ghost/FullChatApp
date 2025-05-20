import React, { useState } from "react";
import FormInput from "./InputLabel/FormInput";
import { Button } from "../ui/button";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useGetChat } from "@/context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useGetChat()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleFormChange = (e) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password) return;
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      console.log("submitting")
      const response = await axios.post(`/api/user/login`, formData, config);
      console.log(response)
      if(response.status === 200){
        setUser(response?.data)
        localStorage.setItem("userInfo", JSON.stringify(response?.data))
        toast("welcome");
        setLoading(false);
        navigate("/chats")
      }
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        value={formData.email}
        name="email"
        type="text"
        handleChange={handleFormChange}
      />
      <FormInput
        value={formData.password}
        name="password"
        type="text"
        handleChange={handleFormChange}
      />
      <div>
        <Button>Go back</Button>
        <Button type="submit">{ loading ? "loading" : "Login"}</Button>
      </div>
    </form>
  );
};

export default Login;
