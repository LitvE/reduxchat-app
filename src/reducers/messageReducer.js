import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    messages: [
        {
            messageId: new Date(),
            userId: 1,
            userName: 'John',
            userSurname: 'Smith',
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz5qM0trrYx2AaBeoJaSOL02HkuOYfMU67F79x_h-GFgW8w6ml&usqp=CAU',
            messageText: 'Does someone have docs?',
            isCurrentUser: false,
        },
        {
            messageId: setTimeout(Date, 1000),
            userId: 2,
            userName: 'Joe',
            userSurname: 'Dow',
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6h3EnAb93XxI83szSxBJzLFA1iV_YyaHTv38l2kc&usqp=CAU',
            messageText: 'Yes )',
            isCurrentUser: true,
        },
        {
            messageId: setTimeout(Date, 1000),
            userId: 2,
            userName: 'Joe',
            userSurname: 'Dow',
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6h3EnAb93XxI83szSxBJzLFA1iV_YyaHTv38l2kc&usqp=CAU',
            messageText: 'Good day.',
            isCurrentUser: true,
        },
        {
            messageId: setTimeout(Date, 1000),
            userId: 3,
            userName: 'Tom',
            userSurname: 'Fox',
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk81yLg1R2X2rIEWf8wk2fikAA6idmg3hwWSIzo94NNVQV5T2_&usqp=CAU',
            messageText: 'I am curious too.',
            isCurrentUser: false,
        },
        {
            messageId: setTimeout(Date, 1000),
            userId: 2,
            userName: 'Joe',
            userSurname: 'Dow',
            avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6h3EnAb93XxI83szSxBJzLFA1iV_YyaHTv38l2kc&usqp=CAU',
            messageText: 'I share you this',
            isCurrentUser: true,
        },
    ],
}

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.CREATE_MESSAGE: {
            const {messages} = state;
            const {messageText} = action;
            const newMessage = {
                ...messageText,
                messageId: new Date(),
                userId: 2,
                userName: 'Joe',
                userSurname: 'Dow',
                avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk81yLg1R2X2rIEWf8wk2fikAA6idmg3hwWSIzo94NNVQV5T2_&usqp=CAU',
                isCurrentUser: true,
            };
            
            const newMessages = [...messages, newMessage];
            return { messages: newMessages };
        }
        default: return state;
    }
};

export default messageReducer;