import React, {useLayoutEffect} from 'react';
import {connect} from 'react-redux';
import styles from './MessagesList.module.scss';

function MessagesList(props) {
    const {messages} = props;

    useLayoutEffect(() => {
        let list = document.getElementById("list");
        list.scrollTop = list.scrollHeight;
    }, [messages.length]);

    const mapMessages = ({messageId, userName, userSurname, avatarImg, messageText, isCurrentUser}) =>{
        if(isCurrentUser){
            return (
                <li key={messageId}>
                    <div className={styles.currentUser}>
                        <p>{messageText}</p>
                    </div>
                </li>
            );
        } else {
            return (
                <li key={messageId}>
                    <div className={styles.otherUser}>
                        <div className={styles.imgContainer}>
                            <img src={avatarImg} alt=''/>
                        </div>
                        <div className={styles.otherUserMessage}>
                            <h2>{userName} {userSurname}</h2>
                            <p>{messageText}</p>
                        </div>
                    </div>
                </li>
            );
        }
 
    }

    return <ul id="list">{messages.map(mapMessages)}</ul>
}

const mapStateToProps = (state) => state.message;

export default connect(mapStateToProps)(MessagesList);

