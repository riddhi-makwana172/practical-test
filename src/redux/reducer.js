import { FETCH_USER_LIST_START, FETCH_USER_LIST_END } from "./actions";

const initialState = {
  userList: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_LIST_START:
      return { ...state, userList: null };
    case FETCH_USER_LIST_END:
      return { ...state, userList: action.data };
    default:
      return { ...state };
  }
};
