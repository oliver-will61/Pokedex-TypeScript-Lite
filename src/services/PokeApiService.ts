
import {Request,  Response} from 'express';
import {PokemonApiResponse, PokemonResumo} from '../models/Pokemon.js'

export async function encontraPokemon(req: Request, res: Response){

    try {

        const {nomePokemon} = req.params;
        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)

        if(!response.ok){
            console.log('[ERRO] Pokemon não encontrado')
            return res.status(404).json({
                mensagem: "[ERRO] Pokemon não encontrado",
                pokemon: null
            });
        }

        //toda as informações do pokemon
        const pokemonData: PokemonApiResponse = await response.json();
        
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

    catch (erro){
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return res.status(500).json({
            success: false,
            error: erro,
            mensagem: "[ERRO] Não foi possível buscar o Pokémon." 
        })
    }

}

