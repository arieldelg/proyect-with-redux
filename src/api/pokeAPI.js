import axios from "axios"

const pokeApi = () => {
    return axios.get(' https://pokeapi.co/api/v2/pokemon?limit=152')
                .then(response => {
                    return response.data.results
                })
                .catch(error => console.log(error))
}

const getPokemonDetail = (url) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${url}`)
                .then(response => {
                    return response.data
                })
                .catch(error => console.log(error))
}

export { pokeApi, getPokemonDetail }