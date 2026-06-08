import {Request,  Response} from 'express';
import { Catalago } from '../models/CatalagoPokemon.js';

export async function removePokemonIdController(req: Request, res: Response) {

    try {
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

        console.log("[OK] Pokémon removido do catálogo.");
        Catalago.mostraCatalago()
        

        return res.status(201).json({
            mensagem: "[OK] Pokémon removido do catálogo.",
            catalagoAtual: Catalago.listaPokemon.length > 0 ? Catalago.listaPokemon : "[AVISO] Catálogo vazio."
        })
    } catch (error) {
        return res.status(500).json({
            error:error,
            mensagem: "Erro no servidor, não foi possivel remover o pokemon"
        })
    }
}