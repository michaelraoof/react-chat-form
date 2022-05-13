import React,{useRef,useEffect} from "react";
import ConversationList from "../ConversationList";
import MessageList from "../MessageList";
import "./Messenger.css";

export default function Messenger(props) {
  const messageEl = useRef(null);
  useEffect(() => {
    if (messageEl) {
    
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        
        const { currentTarget: target } = event;

        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])
  return (
   
      <div className="messenger">
      

        <div className="scrollable sidebar">
          <ConversationList />
        </div>

        <div className="scrollable content"ref={messageEl}>
          <MessageList />
        </div>
      
     
        </div>
     
  
    
  );
}
