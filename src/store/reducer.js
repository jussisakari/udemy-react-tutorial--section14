const initState = {
  persons: []
}

const reducer = (state = initState, action) => {
  if (action.type === 'ADD_PERSON') {
    return {
      ...state,
      persons: state.persons.concat({
        id: Math.random(), // not really unique but good enough here!
        name: action.payload.name,
        age: action.payload.age
      })
    }
  }

  if (action.type === 'REMOVE_PERSON') {
    const updatedPersons = state.persons.filter(person => person.id !== action.personId);
    return {
      ...state,
      persons: updatedPersons
    }
  }

  return state;
}

export default reducer;