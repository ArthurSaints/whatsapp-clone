import React from "react";

import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

import "./Chat.css";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Arthur S.</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Arthur S.</span>
          This is a message
          <span className="chat__timestamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
      </div>

      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}
