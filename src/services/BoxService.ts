import {PokemonResumo} from '../models/Pokemon.js'
 
export class Catalago {

    static listaPokemon: Array<PokemonResumo> = [];

    constructor(){
        
    }

    static addPokemon(pokemon: PokemonResumo){
        Catalago.listaPokemon.push(pokemon)
        console.log('Pokemon adicionado no catalago');
    }

    static mostraCatalago(){
        console.log(Catalago.listaPokemon);
    }
}