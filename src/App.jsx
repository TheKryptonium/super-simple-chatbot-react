import { useState, useEffect } from "react";
import 'https://unpkg.com/supersimpledev@8.0.1/chatbot.js'
import ChatMessage from "./components/ChatMessage";
import ChatInput from "./components/ChatInput.jsx";


export default function App(){
  const [chats, setChats] = useState([])
  const [msg, setMsg] = useState('')
  const [msgUp, setMsgUp] = useState(false)
  
  const chatMessageComponents = chats.map( (chat, index)=>{
    return(<ChatMessage
      key={index}
      message={chat.message}
      sender={chat.sender}
    />)
  })

  function saveInputText(event){
    const message = event.target.value
    setMsg(message)
  }

  function sendMessage(){
    setChats([...chats, {
      message: msg,
      sender: 'user'
    },{
      message: Chatbot.getResponse(msg),
      sender: 'bot'
    }])

    setMsg('')
  }

  return(
    <main>
      <div className="chat-container">
        {chatMessageComponents}
      </div>
      <ChatInput 
        saveInputText={saveInputText} 
        sendMessage={sendMessage}
        value={msg}
      />
    </main>
  )
}