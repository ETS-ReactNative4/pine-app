import { get as getContactRequests } from '../../../PinePaymentProtocol/user/contactRequests';
import getMnemonicByKey from '../../../crypto/getMnemonicByKey';

export const PINE_CONTACT_REQUESTS_GET_REQUEST = 'PINE_CONTACT_REQUESTS_GET_REQUEST';
export const PINE_CONTACT_REQUESTS_GET_SUCCESS = 'PINE_CONTACT_REQUESTS_GET_SUCCESS';
export const PINE_CONTACT_REQUESTS_GET_FAILURE = 'PINE_CONTACT_REQUESTS_GET_FAILURE';

const getRequest = () => {
  return {
    type: PINE_CONTACT_REQUESTS_GET_REQUEST
  };
};

const getSuccess = (contactRequests) => {
  return {
    type: PINE_CONTACT_REQUESTS_GET_SUCCESS,
    contactRequests
  };
};

const getFailure = (error) => {
  return {
    type: PINE_CONTACT_REQUESTS_GET_FAILURE,
    error
  };
};

const getDefaultMnemonicFromKeys = (keys) => {
  const defaultKey = Object.values(keys)[0];
  return getMnemonicByKey(defaultKey.id);
};

/**
 * Action to get all contact requests.
 */
export const get = () => {
  return (dispatch, getState) => {
    const state = getState();
    const keys = state.keys.items;
    const { pineAddress } = state.settings.user.profile;

    if (!pineAddress) {
      return Promise.resolve();
    }

    dispatch(getRequest());

    return getDefaultMnemonicFromKeys(keys)
      .then((mnemonic) => {
        return getContactRequests(pineAddress, mnemonic);
      })
      .then((contactRequests) => {
        dispatch(getSuccess(contactRequests));
        return contactRequests;
      })
      .catch((error) => {
        dispatch(getFailure(error));
        throw error;
      });
  };
};
