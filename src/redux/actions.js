import { servicePath } from "../Helpers/config";

export const FETCH_USER_LIST_START = "FETCH_USER_LIST_START";
export const FETCH_USER_LIST_END = "FETCH_USER_LIST_END";

export const fetchUserList = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER_LIST_START });
    const response = await fetch(servicePath);

    if (response.ok) {
      let result = await response.json();
      dispatch({ type: FETCH_USER_LIST_END, data: result.results });
    }
  };
};
