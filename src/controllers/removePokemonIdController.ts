import {Request,  Response} from 'express';
import { Catalago } from '../models/CatalagoPokemon.js';


export async function removePokemonIdController(req: Request, res: Response) {

    const {idPokemon} = req.params // tipando por padrão como string | string[]
    
    //garante que o parametro seja apenas uma string e o transforma em number
    const id = Array.isArray(idPokemon) ? parseInt(idPokemon[0]) : parseInt(idPokemon);

    Catalago.removePokemonId(id)
}