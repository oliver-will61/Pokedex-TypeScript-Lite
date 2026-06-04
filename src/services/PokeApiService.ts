
import {Request,  Response} from 'express';
import {PokemonApiResponse} from '../models/Pokemon.js'


export async function encontraPokemon(req: Request, res: Response){

        const {nomePokemon} = req.params;

        console.log( `procurando pokemon: ${nomePokemon}...`);

        
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)

        if(!response.ok){
            console.log('[ERRO] Pokemon não encontrado')
            return null
        }

        console.log('Pokemon encontrado!');
        

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


