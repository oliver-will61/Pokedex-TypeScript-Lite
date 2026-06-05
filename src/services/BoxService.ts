import {PokemonResumo} from '../models/Pokemon.js'
import fs from 'fs/promises';

 
export class Catalago {

    protected static listaPokemon: Array<PokemonResumo> = [];

    constructor(){}

    static async addPokemon(pokemon: PokemonResumo){
        this.listaPokemon.push(pokemon)
        await salvarPcBox(this.listaPokemon)
        console.log('Pokemon adicionado no catalago');
    }

    static mostraCatalago(){
        return this.listaPokemon
    }

    static async iniciar(): Promise<void>{
        this.listaPokemon = await carregaPcBox() || []
    }
}

const PC_BOX_PATH = './pc_box.json';

async function carregaPcBox(): Promise<PokemonResumo[] | null> {
  try {
    const rawData = await fs.readFile(PC_BOX_PATH, 'utf-8');
    const dados = JSON.parse(rawData);
    return dados;
  } catch (error) {
        console.error('Erro ao ler arquivo:', error);
        return null
  }
}

async function salvarPcBox(lista: PokemonResumo[]): Promise<void> {
  try {
    await fs.writeFile(PC_BOX_PATH, JSON.stringify(lista, null, 4), 'utf-8');
  } catch (error) {
    console.error('Erro ao salvar arquivo:', error);
  }
}

Catalago.iniciar()
