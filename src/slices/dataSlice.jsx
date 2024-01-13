import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemonDetail, pokeApi } from "../api/pokeAPI";
import { setLoading } from "./uiSlice";

const initialState = {
    pokemon: []
}

const fetchPokemonWithDetails = createAsyncThunk(
    'data/fetchPokemonWithDetails',
    async(_, { dispatch }) => {
        dispatch(setLoading(true))
        const pokemonList = await pokeApi()
        const pokemonDetail = await Promise.all(
        pokemonList.map(element => getPokemonDetail(element.name))
      )
      dispatch(setPokemon(pokemonDetail))
      dispatch(setLoading(false))
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload
        },
        setFavorite: (state, action) => {
            const findIndex = state.pokemon.findIndex(element => element.id === action.payload.pokemonId)

            if (findIndex >= 0) {
                const isFavorite = state.pokemon[findIndex].favorite

                state.pokemon[findIndex].favorite = !isFavorite
            }
        }
    }
})

export { dataSlice, fetchPokemonWithDetails }

export const { setFavorite, setPokemon } = dataSlice.actions
console.log(dataSlice)
// export default dataSlice.reducer