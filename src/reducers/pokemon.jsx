import { SET_POKEMONS } from "../actions/types"

const initialState = {
    pokemon: []
}

const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {...state, pokemon: action.payload}
        default:
            return state
    }
}

export { pokemonReducer }
