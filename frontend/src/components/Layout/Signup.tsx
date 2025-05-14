import { useEffect, useRef, useState } from "react";
import FormInput from "./InputLabel/FormInput";
import { Button } from "../ui/button";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    pic: "",
  });
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const handlePicChange = async (e) => {
    const { name, files } = e.target;
    setLoading(true);
    console.log("my value:", files);
    console.log("my value:", files[0]);
    if (files && files[0]) {
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "chatapp");
      data.append("cloud_name", "lazydeji");
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/lazydeji/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const result = await res.json();
      console.log(result, data);
      setFormData({
        ...formData,
        [name]: result.url,
      });
    }
  };
  const handleFormChange = async (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    console.log("submitted");
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast("fill all the fields");
      setLoading(false);
      return;
    }

    if (formData.confirmPassword !== formData.confirmPassword) {
      toast("passwords don't match");
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const dataDetails = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        pic: formData.pic
      }
      if(dataDetails){
        console.log("dataDetails:", dataDetails)
      }
      const data = await axios.post("/api/user", dataDetails, config);
      if (data.status === 201) {
        toast("welcome");
        navigate("/chats")
      }
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
  };
  return (
    <form onSubmit={handleCreateAccount}>
      <FormInput
        value={formData.name}
        name="name"
        type="text"
        handleChange={handleFormChange}
      />
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
      <FormInput
        value={formData.confirmPassword}
        name="confirmPassword"
        type="text"
        handleChange={handleFormChange}
      />
      <FormInput
        name="pic"
        type="file"
        accept="image/*"
        handleChange={handlePicChange}
      />
      <div>
        <Button>Go back</Button>
        <Button type="submit">Create new account</Button>
      </div>
    </form>
  );
};

export default Signup;
