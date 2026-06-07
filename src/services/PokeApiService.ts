
import {PokemonApiResponse} from '../models/Pokemon.js'


export async function encontraPokemon(pokemon: string){
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        if(!response.ok){
            return null
        }        

        //toda as informações do pokemon
        const pokemonData: PokemonApiResponse = await response.json();
        
        // const pokemonDataResumo: PokemonResumo = {
        //     id: pokemonData.id,
        //     nome: pokemonData.name,
        //     tipos: pokemonData.types.map((item) => item.type.name),
        //     altura: pokemonData.height,
        //     peso: pokemonData.weight
        // }

        return {
            id: pokemonData.id,
            nome: pokemonData.name,
            tipos: pokemonData.types.map((item) => item.type.name),
            altura: pokemonData.height,
            peso: pokemonData.weight
        }
    }


