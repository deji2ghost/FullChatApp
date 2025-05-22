import { Input } from "@/components/ui/input";
import { useGetChat } from "@/context";
import axios from "axios";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import Custommodal from "../customModal/custommodal";

const ChatsLatest = () => {
  const { User, latestMessage, allUser, setSearchAllUser } = useGetChat();
  const [openModal, setOpenModal] = useState(false);
  const fetchChats = async (userId: string) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmE2MGNjOWFlNTRhY2Q3ODBlMWI0ZCIsImlhdCI6MTc0NzY4NzM2MywiZXhwIjoxNzUwMjc5MzYzfQ.Mzypp4BB9_TrVsHQHoWv40dWLP_vwW6ASiuXD9YNDW8`,
        },
      };
      const response = await axios.post(
        `http://localhost:5000/api/chat`,
        { userId },
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCreateGroup = () => {};

  const handleShowChat = (userId: string) => {
    console.log(userId);
    fetchChats(userId);
  };

  useEffect(() => {
    console.log(User, latestMessage);
  }, [User, latestMessage]);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="bg-[#fcfcfc] flex flex-col gap-3 border-r w-[40%] h-screen py-3 px-2">
      <div className="flex items-center justify-between gap-4">
        <Input placeholder="search for chats" />
        <div onClick={handleModal} className="cursor-pointer">
          <Plus className="border rounded-full" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {latestMessage.map((item) => (
          <div
            onClick={() => handleShowChat(item.users[1]?._id)}
            className="px-2 py-3 cursor-pointer rounded-md w-full border"
            key={item._id}
          >
            <h1>{item?.isGroupChat ? item.chatName : item.users[1]?.name}</h1>
            <p>{item?._id}</p>
          </div>
        ))}
      </div>
      <Custommodal
        handleAdd={handleCreateGroup}
        handleCancel={() => setOpenModal(!openModal)}
        open={openModal}
        Add="Create Group"
        Cancel="Cancel"
        Header="Create Group"
        headerDescription="Create new group for users"
      />
    </div>
  );
};

export default ChatsLatest;
