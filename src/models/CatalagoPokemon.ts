import {carregaPcBox, salvarPcBox} from '../services/BoxService.js'
import {PokemonResumo} from '../models/Pokemon.js'

export class Catalago {

    public static listaPokemon: Array<PokemonResumo> = [];

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

    static async removePokemonId(id: number): Promise<boolean>{

        //verifica se o id existe
        const index = this.listaPokemon.findIndex(pokemon => pokemon.id === id)

        //se o id não existir retorna false
        if (index === -1) {
            return false
        }

        // atualiza a lista sem o pokemon correspondente ao id
        this.listaPokemon = this.listaPokemon.filter(
            pokemon => pokemon.id !== id
        )

        //salva a lista no pcBox
        await salvarPcBox(this.listaPokemon)

        // retorna true
        return true

    }

    //apenas mostra o catalago no terminal
    static mostraCatalago(){

        //mostra catalago no terminal

        console.log("Catalago Atual:")

        if(Catalago.listaPokemon.length <= 0){
            console.log("[AVISO] Catálogo vazio.");
            return
        }

        this.listaPokemon.forEach((pokemon: PokemonResumo) => {
            console.log(`#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`)
        });

        return 
    }

    static async iniciar(): Promise<void>{
        this.listaPokemon = await carregaPcBox() || []
    }
}

Catalago.iniciar()

