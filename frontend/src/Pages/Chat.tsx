import axios from "axios"
import { useEffect, useState } from "react"

const Chat = () => {
    const [ chats, setChats ] = useState([])
    const fetchChats = async() => {
      try {
        const {data} = await axios.get("http://localhost:5000/api/chat")
        setChats(data)
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
