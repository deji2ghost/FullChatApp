import axios from "axios"
import { useEffect, useState } from "react"

const Chat = () => {
    const [ chats, setChats ] = useState([])
    const fetchChats = async() => {
      try {
        const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjQ1MGYyNTBlYThlOGI0ZjZiYmUwYSIsImlhdCI6MTc0NzIxMDc4NCwiZXhwIjoxNzQ5ODAyNzg0fQ.40S5dJKJUjPZuntSwLgxUkk7-UpzHikTs4opPzp5ZII`,
        },
      };
        const response = await axios.get("http://localhost:5000/api/user?search=piyush", config)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
        fetchChats()
    }, [])
  return (
    <div>
      chat component
      {/* {
        chats.map((item, index) => (
            <div key={index}>{item?.chatName}</div>
        ))
      } */}
    </div>
  )
}

export default Chat
