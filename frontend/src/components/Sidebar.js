import React from "react";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

import "./Sidebar.css";

export default function Sidabar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://avatars1.githubusercontent.com/u/37190318?s=460&u=da61e29b008732fc908e946862196e17a378382d&v=4" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search ou start new chat" type="text" />
        </div>
      </div>
    </div>
  );
}
