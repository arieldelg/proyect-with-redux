
// Redux con Hooks

import { Col } from 'antd'
import { Search } from './Components/Search'
import { PockemonList } from './Components/PockemonList'
import logo from './Statics/logo.svg'
import { useEffect } from 'react'
import { pokeApi } from './api/pokeAPI'
import { setPokemons } from './actions'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'



function App() {
  const pokemon = useSelector(state => state.pokemon)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonList = await pokeApi()
      dispatch(setPokemons(pokemonList))
    }
    fetchPokemon()
  }, [])
  return (
    <main className='mt-6 px-8 w-screen'>
    <Col span={6} offset={9}>
      <img src={logo} alt='pokedex' className='py-4'/>
    </Col>
    <Col span={8} offset={8}>
      <Search/>
    </Col>
    <PockemonList pokemon={pokemon}/>
    </main>
  )
}

export default App

// Redux con connect
// import { Col } from 'antd'
// import { Search } from './Components/Search'
// import { PockemonList } from './Components/PockemonList'
// import logo from './Statics/logo.svg'
// import './App.css'
// import { useEffect, useState } from 'react'
// import { pokeApi } from './api/pokeAPI'
// import { connect } from 'react-redux'
// import { setPokemons as setPokemonAction } from './actions'

// const mapStateToProps = (state) => ({
//   pokemon: state.pokemon,
// })

// const mapDispatchToProps = (dispatch) => ({
//   setPokemon: (value) => dispatch(setPokemonAction(value))
// })

// function App({ pokemon, setPokemon}) {
//   useEffect(() => {
//     const fetchPokemon = async () => {
//       const pokemonList = await pokeApi()
//       setPokemon(pokemonList)
//     }
//     fetchPokemon()
//   }, [])
//   return (
//     <main className='mt-6 px-8 w-screen'>
//     <Col span={6} offset={9}>
//       <img src={logo} alt='pokedex' className='py-4'/>
//     </Col>
//     <Col span={8} offset={8}>
//       <Search/>
//     </Col>
//     <PockemonList pokemon={pokemon}/>
//     </main>
//   )
// }



// export default connect(mapStateToProps, mapDispatchToProps)(App)
