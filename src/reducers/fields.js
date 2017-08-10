const fields = (state = {}, action) => {
  switch(action.type) {
    case 'SET_TICKET':
      return Object.assign({}, state, { ticket: action.payload })
    case 'SET_USER':
      return Object.assign({}, state, { user: action.payload })
    case 'SET_USER_FIELDS':
      return Object.assign({}, state, { userFields: action.payload })
  }
  return state
}

export default fields