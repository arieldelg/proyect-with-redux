import axios from "axios"

const pokeApi = () => {
    return axios.get(' https://pokeapi.co/api/v2/pokemon?limit=152')
                .then(response => {
                    return response.data.results
                })
                .catch(error => console.log(error))
}

export { pokeApi }