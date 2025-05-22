import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [User, setUser] = useState();
  const [allUser, setAllUser] = useState([]);
  const [searchAllUser, setSearchAllUser] = useState("");
  const [latestMessage, setLatestMessage] = useState([]);

  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmE2MGNjOWFlNTRhY2Q3ODBlMWI0ZCIsImlhdCI6MTc0NzY4NzM2MywiZXhwIjoxNzUwMjc5MzYzfQ.Mzypp4BB9_TrVsHQHoWv40dWLP_vwW6ASiuXD9YNDW8`,
        },
      };
      const response = await axios.get(
        `http://localhost:5000/api/user?search=${searchAllUser}`,
        config
      );
      setAllUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMessages = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MmE2MGNjOWFlNTRhY2Q3ODBlMWI0ZCIsImlhdCI6MTc0NzY4NzM2MywiZXhwIjoxNzUwMjc5MzYzfQ.Mzypp4BB9_TrVsHQHoWv40dWLP_vwW6ASiuXD9YNDW8`,
      },
    };
    try {
      const response = await axios.get(
        `http://localhost:5000/api/chat`,
        config
      );
      console.log(response.data);
      setLatestMessage(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
    console.log(userInfo);
    if (userInfo) {
      setUser(userInfo);
      navigate("/chats");
    }
  }, []);

  return (
    <ChatContext.Provider value={{ User, setUser, latestMessage, allUser, setSearchAllUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useGetChat = () => {
  return useContext(ChatContext);
};
