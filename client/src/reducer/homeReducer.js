import {
  LOAD_SKILLS,
  SKILLS_LOADED,
  SKILLS_LOADING_FAIL,
} from "../actions/types";

const initialState = {
  skills: null,
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SKILLS:
      return {
        ...state,
        skills: null,
        loading: true,
      };
    case SKILLS_LOADED:
      return {
        ...state,
        skills: action.payload,
        loading: false,
      };
    case SKILLS_LOADING_FAIL:
      return {
        ...state,
        skills: null,
        loading: false,
      };
    default:
      return state;
  }
};
