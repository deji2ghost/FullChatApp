import ChatsLatest from "@/components/Layout/ChatLatest/chatsLatest";
import ChatsPage from "@/components/Layout/chatsPage/ChatsPage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Chat = () => {
  const [chats, setChats] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetchChats();
  // }, []);

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
