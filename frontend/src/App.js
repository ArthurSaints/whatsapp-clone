import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "./api/axios";

import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

import "./App.css";

function App() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get("/messages/sync").then((response) => {
            setMessages(response.data);
        });
    }, []);

    useEffect(() => {
        const pusher = new Pusher("951b6cbb760c52ab3a97", {
            cluster: "us2",
        });

        const channel = pusher.subscribe("messages");
        channel.bind("inserted", (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    console.log(messages);

    return (
        <div className="app">
            <div className="app__body">
                <Sidebar />
                <Chat messages={messages} />
            </div>
        </div>
    );
}

export default App;
