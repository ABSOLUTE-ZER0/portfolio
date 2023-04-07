import {
  LOAD_WORK,
  WORK_LOADED,
  WORK_LOADING_FAIL,
} from "../actions/types";

const initialState = {
  works: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WORK:
      return {
        ...state,
        works: null,
        loading: true,
      };
    case WORK_LOADED:
      return {
        ...state,
        works: action.payload,
        loading: false,
      };
    case WORK_LOADING_FAIL:
      return {
        ...state,
        works: null,
        loading: false,
      };
    default:
      return state;
  }
};
