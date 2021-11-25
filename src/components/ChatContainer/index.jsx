import React from "react";
import MessageForm from "../MessageForm";
import MessagesList from "../MessagesList";
import style from './ChatContainer.module.scss';

const ChatContainer = () => {
    return (
        <div className={style.chatContainer}>
            <MessagesList />
            <MessageForm />
        </div>
    );
}

export default ChatContainer;