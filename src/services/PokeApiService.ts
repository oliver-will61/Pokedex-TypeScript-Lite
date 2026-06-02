
import {Request,  Response} from 'express';
import {PokemonApiResponse, PokemonResumo} from '../models/Pokemon.js'

export async function encontraPokemon(req: Request, res: Response){

    try {

        const {nomePokemon} = req.params;
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)

        const pokemonData: PokemonApiResponse = await response.json();

        //toda as informações do pokemon
        //console.log(pokemonData);
        
        const pokemon: PokemonResumo = {
            id: pokemonData.id,
            nome: pokemonData.name,
            tipos: pokemonData.types.map((item) => item.type.name),
            altura: pokemonData.height,
            peso: pokemonData.weight
        }

        
        
        return res.status(201).json({
            success: true,
            pokemon: pokemon
        })
    }

    catch (error){
        console.error('Erro ao capturar o pokemon', error);
        return res.status(500).json({
            success: false,
            error: error
        })
    }

}

