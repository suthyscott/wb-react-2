import axios from "axios"
import { useState, useEffect } from "react"

const Pokemon = props => {
    const [pokemon, setPokemon] = useState([])

    const getPokemon = async () => {
        const res = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?limit=${props.num}`
        )
        setPokemon(res.data.results)
    }

    useEffect(() => {
        console.log("inside useEffect")
        getPokemon()
    }, [])

    const pokemonList = pokemon.map(poke => (
        <li key={poke.name}>{poke.name}</li>
    ))

    console.log('new render')
    return <ul>{pokemonList}</ul>
}

export default Pokemon
