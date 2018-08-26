const defautSelectedUserId = 0;
export const SELECTION_CHANGED = "SELECTION_CHANGED";
export const selectedId = (state = defautSelectedUserId, {type, payload}) => {
  switch(type) {
    case SELECTION_CHANGED:
      return payload;
    default:
      return state;
  }
};

const defaultUsers = [];
export const LOADED = "LOADED";
export const INCREMENT_VOTE = "INCREMENT_VOTE";
export const users = (state = defaultUsers, {type, payload}) => {
  switch(type) {
    case LOADED:
      return [...payload];
    case INCREMENT_VOTE :
      return state.map( t => {
        if(t.id !== payload.id) {
          return t;
        }
        let newVal = {
          ...t,
          vote: t.vote+1
        };
        return newVal
      });

    default:
      return state;
  }
};
