import ACTION_TYPES from "./actionTypes"

export const createMessage= messageText => {
    return {
      type: ACTION_TYPES.CREATE_MESSAGE,
      messageText: messageText,
    }
}