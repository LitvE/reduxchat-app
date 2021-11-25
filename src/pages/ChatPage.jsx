import React from 'react'
import ChatContainer from '../components/ChatContainer';
import style from './ChatPage.module.scss';

function ChatPage() {
    return (
        <div className={style.container}>
            <ChatContainer />
        </div>
    )
}

export default ChatPage;
