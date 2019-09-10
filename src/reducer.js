export default function reducer(state, action) {
  if (action.type === "data:catFact") {
    return {
      ...state,
      catFact: action.payload
    };
  }

  return state;
}
