import {Request,  Response} from 'express';
import {Catalago} from '../models/CatalagoPokemon.js'
import {PokemonResumo} from '../models/Pokemon.js'

export async function mostraCatalagoController(req: Request, res: Response){

    const listaPokemon: Array<PokemonResumo> = Catalago.listaPokemon

    try{    
        
        if(listaPokemon.length <= 0){
             console.log("[AVISO] Catálogo vazio.");
            
            return res.status(200).json({
                mensagem: "[AVISO] Catálogo vazio."
            })
        }

        Catalago.mostraCatalago()

        return res.status(201).json({
            catalago: listaPokemon
        })
    }catch (erro){
        return res.status(500).json({
            error:erro,
            mensagem: "Não foi possivel encontrar o catalago"
        })
    }
}
