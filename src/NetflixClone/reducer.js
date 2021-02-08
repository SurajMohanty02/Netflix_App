export const initialState = {
  user: null,
};
export const actionTypes = {
  set_user: "set_user",
  remove_user: "remove_user",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.set_user:
      return { ...state, user: action.user };
    case actionTypes.remove_user:
      return { ...state, user: null };
    default:
      return state;
  }
};
export default reducer;
