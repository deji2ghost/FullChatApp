import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import { ChatProvider } from "./context";
import Main from "./components/Layout/main.tsx/main";

function App() {
  return (
    <BrowserRouter>
    <ChatProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Main />}>
            <Route path="/chats" element={<Chat />} />
            {/* <Route path="/chats" element={<Chat />} /> */}
          </Route>
        </Routes>
    </ChatProvider>
      </BrowserRouter>
  );
}

export default App;
