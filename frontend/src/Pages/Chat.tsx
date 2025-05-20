import ChatsLatest from "@/components/Layout/ChatLatest/chatsLatest";
import ChatsPage from "@/components/Layout/chatsPage/ChatsPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchChats = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmE2MGNjOWFlNTRhY2Q3ODBlMWI0ZCIsImlhdCI6MTc0NzY4NzM2MywiZXhwIjoxNzUwMjc5MzYzfQ.Mzypp4BB9_TrVsHQHoWv40dWLP_vwW6ASiuXD9YNDW8`,
        },
      };
      const response = await axios.get(
        `http://localhost:5000/api/user?search=${search}`,
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo")!);
    if (user) {
      navigate("/chats");
    }
  }, []);
  return (
    <div className="flex items-start">
      <ChatsLatest />
      <ChatsPage />
    </div>
  );
};

export default Chat;
