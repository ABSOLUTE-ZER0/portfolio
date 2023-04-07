import { LOAD_WORK, WORK_LOADED, WORK_LOADING_FAIL } from "../actions/types";

import API from "../api";

export const setWork = (type) => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_WORK,
    });

    const res = await API.post(
      "/api/project",
      (type = {
        type,
      })
    );
    if (res.data.errors) {
      dispatch({
        type: WORK_LOADING_FAIL,
      });
      return res.data;
    }

    dispatch({
      type: WORK_LOADED,
      payload: res.data,
    });

    return res;
  } catch (error) {
    dispatch({
      type: WORK_LOADING_FAIL,
    });
  }
};

export const setAllWork = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_WORK,
    });

    const res = await API.get("/api/project");
    if (res.data.errors) {
      dispatch({
        type: WORK_LOADING_FAIL,
      });
      return res.data;
    }

    dispatch({
      type: WORK_LOADED,
      payload: res.data,
    });

    return res;
  } catch (error) {
    dispatch({
      type: WORK_LOADING_FAIL,
    });
  }
};
