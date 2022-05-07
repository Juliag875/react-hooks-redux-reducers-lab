const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  switch (action.type) {
    case "presents/increase": 
      return {numberOfPresents: state.numberOfPresents + 1};
    default:
      return initialState
  }
}

console.log(managePresents(initialState, {type: "presents/increase"}))