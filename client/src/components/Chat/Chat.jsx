import React, { useEffect, useState } from 'react'
import './style.css'

const Chat = ({socket, username, room}) => {
    const [message, setMessage] = useState("");
    const [messagelist, setMessageList] = useState([]);

    const sendMessage = async () => {
        if(message !== "") {
            const messageData = {
                username: username,
                room: room,
                message: message,
                time: new Date(Date.now()).getHours() + 
                ":" + new Date(Date.now()).getMinutes(),
            };
            await socket.emit("send_message", messageData)
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket]);

    return (
        <div className='container'>
            <h1>Live Chat</h1>
            <div className='messages'>
                {messagelist.map((messagecontent, idx) => {
                    return <div className='box' key={idx} >{messagecontent.username}: <h3>{messagecontent.message}</h3></div>
                })}
            </div>
            <input type="text" onChange={(e) => {setMessage(e.target.value)}}/>
            <button onClick={sendMessage} >&#9658;</button>
        </div>
    )
}

export default Chat