import React, { useState } from 'react'
import io from 'socket.io-client';
import Chat from '../Chat/Chat';
import NavBar from '../NavBar/NavBar';
import './style.css'

const socket = io.connect("http://localhost:8000");

const ChatBox = () => {

    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [show, setShow] = useState(false);

    const joinRoom = () => {
        if (username !== "" && room !== ""){
            socket.emit("join_room", room)
            setShow(true)
        }
    }

    return (
        <>
        <NavBar/>
        <div className='test'>
            {!show ? (
            <div>
            <h1>Join a Chat</h1>
            <input type="text" onChange={(e) => {setUsername(e.target.value)}} placeholder='UserName...'/>
            <input type="text" onChange={(e) => {setRoom(e.target.value)}} placeholder='Room ID...'/>
            <button onClick={joinRoom}> Join A Room</button>
            </div>
            )
            : (
            <Chat socket={socket} room={room} username={username} />
            )}
        </div>
        </>
    )
}

export default ChatBox