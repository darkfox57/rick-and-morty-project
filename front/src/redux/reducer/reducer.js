import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER, FILTER, ORDER } from '../actions/type';

const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, actions.payload],
        allCharacters: [...state.allCharacters, actions.payload]
      }
    case DELETE_FAVORITE_CHARACTER:
      const deletedChar = state.myFavorites.filter(({ id }) => {
        return id !== actions.payload
      })
      return {
        ...state,
        myFavorites: deletedChar,
        allCharacters: deletedChar,
      }
    case FILTER:
      const copyFilter = [...state.allCharacters]
      const filtred = copyFilter.filter(
        (char) => char.gender === actions.payload
      )
      return {
        ...state,
        myFavorites: filtred,
      }
    case ORDER:
      const copyOrder = [...state.allCharacters]
      const order = copyOrder.sort((a, b) => {
        if (a.id > b.id) {
          return 'Ascendent' === actions.payload ? 1 : -1
        }
        if (a.id < b.id) {
          return 'Descendent' === actions.payload ? 1 : -1
        }
        return 0
      })
      return {
        ...state,
        myFavorites: order
      }
    default:
      return { ...state }
  }
}


export default reducer;