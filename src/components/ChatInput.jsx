const ChatInput = (props)=>{
    return(
        <div className="chat-entries-container">
            <input type="text" 
            name="chat-input" 
            className="chat-input"
            placeholder="Send a message to Chatbot" 
            onChange={props.saveInputText}
            value={props.value}/>

            <button className="btn-send"
                onClick={props.sendMessage}>Send</button>
        </div>    
    )
}

export default ChatInput