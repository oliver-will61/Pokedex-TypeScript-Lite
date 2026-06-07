import {Request,  Response} from 'express';
import { Catalago } from '../models/CatalagoPokemon.js';

export async function removePokemonIdController(req: Request, res: Response) {

    const {idPokemon} = req.params // tipando por padrão como string | string[]
    
    //garante que o parametro seja apenas uma string e o transforma em number
    const id = Array.isArray(idPokemon) ? parseInt(idPokemon[0]) : parseInt(idPokemon);

    const removido = await Catalago.removePokemonId(id)

    if (!removido) {
        console.log(`[AVISO] Nenhum Pokémon encontrado com esse ID.`)
        return res.status(404).json({
            mensagem: `[AVISO] Nenhum Pokémon encontrado com esse ID.`
        });
    }

    console.log("OK] Pokémon removido do catálogo.");
    Catalago.mostraCatalago()
    

    return res.status(201).json({
        mensagem: "[OK] Pokémon removido do catálogo.",
        catalago: Catalago.listaPokemon.length > 0 ? Catalago.listaPokemon : "[AVISO] Catálogo vazio."
    })
}