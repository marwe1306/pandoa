import { SET_DETAIL } from "../constants/ActionTypes";

const initialState = [];

export default function detail(state = initialState, action) {
  switch (action.type) {
    case SET_DETAIL:
      console.log("dtai");
      return action.id;
    default:
      return state;
  }
}
