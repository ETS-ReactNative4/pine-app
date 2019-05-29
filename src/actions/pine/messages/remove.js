import removeMessage from '../../../pineApi/user/messages/remove';

export const PINE_MESSAGES_REMOVE_REQUEST = 'PINE_MESSAGES_REMOVE_REQUEST';
export const PINE_MESSAGES_REMOVE_SUCCESS = 'PINE_MESSAGES_REMOVE_SUCCESS';
export const PINE_MESSAGES_REMOVE_FAILURE = 'PINE_MESSAGES_REMOVE_FAILURE';

const removeRequest = () => {
  return {
    type: PINE_MESSAGES_REMOVE_REQUEST
  };
};

const removeSuccess = () => {
  return {
    type: PINE_MESSAGES_REMOVE_SUCCESS
  };
};

const removeFailure = (error) => {
  return {
    type: PINE_MESSAGES_REMOVE_FAILURE,
    error
  };
};

/**
 * Action to remove a message from the user's Pine server.
 *
 * @param {Object} message - Message to remove.
 * @param {string} message.id - The ID of the message.
 * @param {Object} [recipient] - Recipient of the message, if removing a sent message.
 * @param {string} recipient.address - Recipient's Pine address.
 * @param {string} recipient.userId - Recipient's user ID.
 */
export const remove = (message, recipient) => {
  return (dispatch, getState) => {
    const state = getState();
    const { credentials } = state.pine;

    dispatch(removeRequest());

    return removeMessage(message.id, recipient, credentials)
      .then(() => {
        dispatch(removeSuccess());
      })
      .catch((error) => {
        dispatch(removeFailure(error));
        throw error;
      });
  };
};
