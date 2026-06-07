
import {carregaPcBox, salvarPcBox} from '../services/BoxService.js'
import {PokemonResumo} from '../models/Pokemon.js'


export class Catalago {

    protected static listaPokemon: Array<PokemonResumo> = [];

    constructor(){}

    static async addPokemon(pokemon: PokemonResumo): Promise<boolean>{
        const existe = this.listaPokemon.some(
            //usa o id ou o nome do Pokemon para verificar se o mesmo já existee no catalago
            p => p.id === pokemon.id || p.nome === pokemon.nome
        )

        if (existe) {
            return false
        }

        this.listaPokemon.push(pokemon)
        await salvarPcBox(this.listaPokemon)
        return true
    }

    static async removePokemonId(id: number){
        const index = this.listaPokemon.findIndex(pokemon => pokemon.id === id)

        if (index === -1) {
            console.log(`Pokémon com id ${id} não encontrado no catálogo`)
            return
        }

        this.listaPokemon = this.listaPokemon.filter(
            pokemon => pokemon.id !== id
        )

        await salvarPcBox(this.listaPokemon)
        console.log('Catálogo após remoção:', this.listaPokemon)
    }

    static mostraCatalago(){
        return this.listaPokemon
    }

    static async iniciar(): Promise<void>{
        this.listaPokemon = await carregaPcBox() || []
    }
}

Catalago.iniciar()

