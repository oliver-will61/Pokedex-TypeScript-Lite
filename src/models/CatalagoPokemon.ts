
import {carregaPcBox, salvarPcBox} from '../services/BoxService.js'
import {PokemonResumo} from '../models/Pokemon.js'


export class Catalago {

    protected static listaPokemon: Array<PokemonResumo> = [];

    constructor(){}

    static async addPokemon(pokemon: PokemonResumo): Promise<boolean>{
        const existe = this.listaPokemon.some(
            p => p.id === pokemon.id || p.nome === pokemon.nome
        )

        if (existe) {
            return false
        }

        this.listaPokemon.push(pokemon)
        await salvarPcBox(this.listaPokemon)
        return true
    }

    static mostraCatalago(){
        return this.listaPokemon
    }

    static async iniciar(): Promise<void>{
        this.listaPokemon = await carregaPcBox() || []
    }
}

Catalago.iniciar()

