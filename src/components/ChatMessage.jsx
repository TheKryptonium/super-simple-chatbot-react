import clsx from "clsx"

const ChatMessage = (props)=>{
    const isBot  = props.sender==='bot'
    const isHuman = props.sender === 'user' 
    
    const classes = clsx("chat-msg-container",{
        "bot": isBot,
        "human": isHuman
    })

    return(
        <div className={classes}>
            {isBot && 
            (<img src="./src/assets/chatbot.jpg" 
                alt="chat-img" 
                width="50px"/>)}

            <span className="chat-msg">{props.message}</span>

            {isHuman && 
            (<img src="./src/assets/user-profile.jpg" 
                alt="chat-img" 
                width="50px"/>)}

        </div>
    )
}

export default ChatMessage