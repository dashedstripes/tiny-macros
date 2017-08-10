const search = (state = {}, action) => {
  switch(action.type) {
    case 'SET_SEARCH_INPUT':
      return Object.assign({}, state, {input: action.payload})
    case 'SET_RESULTS':
      return Object.assign({}, state, {results: action.payload})
  }
  return state
}

export default search