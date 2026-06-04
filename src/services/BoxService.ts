import {PokemonResumo} from '../models/Pokemon.js'
 
export class Catalago {

    protected static listaPokemon: Array<PokemonResumo> = [];

    constructor(){}

    static addPokemon(pokemon: PokemonResumo){
        this.listaPokemon.push(pokemon)
        console.log('Pokemon adicionado no catalago');
    }

    static mostraCatalago(){
        return this.listaPokemon
    }
}