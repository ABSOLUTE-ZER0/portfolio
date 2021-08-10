import {
  LOAD_SKILLS,
  SET_THEME,
  SKILLS_LOADED,
  SKILLS_LOADING_FAIL,
} from "../actions/types";

import API from "../api"

export const setSkills = (type) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_SKILLS,
    });

    const res = await API.post("/api/home" , type={type});
    if (res.data.errors) {
      dispatch({
        type: SKILLS_LOADING_FAIL,
      });
      return res.data;
    }

    dispatch({
      type: SKILLS_LOADED,
      payload: res.data,
    });

    return res;
  } catch (error) {
    dispatch({
      type: SKILLS_LOADING_FAIL,
    });
  }
};

export const setTheme = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_THEME,
    });
  } catch (error) {
  }
};
