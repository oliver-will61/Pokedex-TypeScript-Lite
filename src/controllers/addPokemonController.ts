import {encontraPokemon} from '../services/PokeApiService.js'
import {Request,  Response} from 'express';
import {Catalago} from '../models/CatalagoPokemon.js'
import {PokemonResumo} from '../models/Pokemon.js'

export async function addPokemonController(req: Request, res: Response){

    let {nomePokemon} = req.params

    //garante que o parametro seja apenas uma string
    nomePokemon = Array.isArray(nomePokemon) ? nomePokemon[0] : nomePokemon;

    try{    

        console.log(`Procurando pokemon: ${nomePokemon}...`)
        
        const pokemonDataResumo: PokemonResumo | null =  await encontraPokemon(nomePokemon) 

        if(pokemonDataResumo == null) {
            console.log("[ERRO] Pokémon não encontrado: pokemon-inexistente");
            
            return res.status(404).json({
                mensagem: "[ERRO] Pokémon não encontrado: pokemon-inexistente"
            })
        }

        console.log('Pokemon encontrado!')

        const adicionado = await Catalago.addPokemon(pokemonDataResumo)

        if (!adicionado) {
            console.log(`[AVISO] ${nomePokemon} já está no catálogo.`);
            return res.status(409).json({
                mensagem: `[AVISO] ${nomePokemon} já está no catálogo.`
            })
        }

        console.log(`[OK] ${nomePokemon} adicionado ao catálogo.`);

        return res.status(201).json({
            mensagem: `[OK] ${nomePokemon} adicionado ao catálogo.`,
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

