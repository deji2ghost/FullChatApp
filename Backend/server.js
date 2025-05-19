const express = require("express")
const { chats } = require("./data/data")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const colors = require("colors")
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")

dotenv.config()
connectDB()
const app = express()
const cors = require("cors")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes)
app.use("/api/chat", chatRoutes)

app.get("/", (req, res) => {
    res.send("Api is running")
})

app.use(notFound)
app.use(errorHandler)

app.get("/api/chat", (req, res) => {
    console.log(chats)
    res.send(chats)
})

app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c) => c._id === req.params.id)
    res.send(singleChat)
    console.log(req.params.id)
})

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`server started on PORT ${PORT}`))