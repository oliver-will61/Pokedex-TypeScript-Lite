
import {Request,  Response} from 'express';


export async function encontraPokemon(req: Request, res: Response){

    try {

        const {nomePokemon} = req.params;

        console.log('esse é o parametro: ', nomePokemon);
        

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)

        const pokemonData = await response.json();

        console.log(pokemonData);
        
        
        return res.status(201).json({
            success: true,
            pokemon: pokemonData
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

