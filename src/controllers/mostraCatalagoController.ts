import {Request,  Response} from 'express';
import {Catalago} from '../services/BoxService.js'
import {PokemonResumo} from '../models/Pokemon.js'

export async function mostraCatalago(req: Request, res: Response){

    try{
        const listaCatalago: Array<PokemonResumo> = Catalago.mostraCatalago();
        
        return res.status(201).json({
            catalago: listaCatalago
        })
    }catch (erro){
        return res.status(500).json({
            error:erro,
            mensagem: "Não foi possivel encontrar o catalago"
        })
    }
}
