import React, { useEffect, useState } from 'react'

const Chat = ({socket, username, room}) => {
    const [message, setMessage] = useState("");
    const [messagelist, setMessageList] = useState([]);

    const sendMessage = async () => {
        if(message !== "") {
            const messageData = {
                username: username,
                room:room,
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
        <div>
            <p>Live Chat</p>
            <div>
                {messagelist.map((messagecontent, idx) => {
                    return <h1 key={idx} >{messagecontent.message}</h1>
                })}
            </div>
            <input type="text" onChange={(e) => {setMessage(e.target.value)}}/>
            <button onClick={sendMessage} >&#9658;</button>
        </div>
    )
}

export default Chat