import { ADD_FAVORITE_CHARACTER, DELETE_FAVORITE_CHARACTER, FILTER, ORDER } from './type';

export function addFavoriteCharacter(character) {
 return {
  type: ADD_FAVORITE_CHARACTER, payload: character
 }
}

export function deleteFavoriteCharacter(id) {
 return { type: DELETE_FAVORITE_CHARACTER, payload: id }
}

export function filterCards(status) {
 return { type: FILTER, payload: status }
}

export function orderCards(id) {
 return { type: ORDER, payload: id }
}

