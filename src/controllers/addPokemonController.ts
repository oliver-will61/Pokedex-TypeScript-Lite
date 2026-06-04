import {encontraPokemon} from '../services/PokeApiService.js'
import {Request,  Response} from 'express';
import {Catalago} from '../services/BoxService.js'
import {PokemonResumo} from '../models/Pokemon.js'

export async function addPokemonController(req: Request, res: Response){

    try{

                
        const pokemonDataResumo: PokemonResumo | null =  await encontraPokemon(req, res) 

        if(pokemonDataResumo == null) {
            return res.status(404).json({
                mensagem: "pokemon não encontrado"
            })
        }

        Catalago.addPokemon(pokemonDataResumo)

        return res.status(201).json({
            mensagem: 'Pokemon adicionado no catalago!',
            pokemon: pokemonDataResumo
        })
            

    }catch (erro){
        console.log("Erro na API: pokeapi");
        return res.status(500).json({
            success: false,
            error: erro,
            mensagem: "Erro na API: pokeapi"
        })
    }
}

