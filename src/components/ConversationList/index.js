import React, { useState, useEffect } from "react";
import ConversationSearch from "../ConversationSearch";
import ConversationListItem from "../ConversationListItem";
import Toolbar from "../Toolbar";
import ToolbarButton from "../ToolbarButton";
import axios from "axios";

import "./ConversationList.css";

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations();
    
  }, []);
  const [searchTerm, setSearchTerm] = useState("");
  const getConversations = () => {
    axios.get("https://randomuser.me/api/?results=1").then((response) => {
      let newConversations = response.data.results.map((result) => {
        return {
          photo: result.picture.large,
          name: `${result.name.first} ${result.name.last}`,
          text: "Hello world! This is a long message that needs to be truncat.",
        };
      });
      setConversations([...conversations, ...newConversations]);
    });
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  return (
    <div className="conversation-list">
      <Toolbar
        
        title="Messenger"
        leftItems={[<ToolbarButton key="cog" icon="ion-ios-cog" />]}
      
      />
      <ConversationSearch handleInputChange={handleInputChange} />
      {conversations.map((conversation) => {
        if (conversation.name.toLowerCase().includes(searchTerm.toLowerCase()) || searchTerm === "") {
           
          return <ConversationListItem key={conversation.name} data={conversation} />;
        }
      })}
    </div>
  );
}
