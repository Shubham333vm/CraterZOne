export const initialState = {
  location: []
};



export const reducer = (state, action) => {
  {console.log("action -->" + action)}

  switch (action.type) {
    case "ADD_TO_LOCATION":
      return {
        ...state,
        location: [...state.location, action.location ]
      }

    case "REMOVE_FROM_LOCATION":
      return {
        ...state,
       // loc: [...state.loc, ...state.loc.reduce((item)=>(loc.id!==action.loc.id))]
      }

    default:
      return state;
  }
};
