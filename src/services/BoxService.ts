import {PokemonResumo} from '../models/Pokemon.js'
import fs from 'fs/promises';

 
const PC_BOX_PATH = './pc_box.json';

export async function carregaPcBox(): Promise<PokemonResumo[] | null> {
  try {
    const rawData = await fs.readFile(PC_BOX_PATH, 'utf-8');
    const dados = JSON.parse(rawData);
    return dados;
  } catch (error) {
        console.error('Erro ao ler arquivo:', error);
        return null
  }
}

export async function salvarPcBox(lista: PokemonResumo[]): Promise<void> {
  try {
    await fs.writeFile(PC_BOX_PATH, JSON.stringify(lista, null, 4), 'utf-8');
  } catch (error) {
    console.error('Erro ao salvar arquivo:', error);
  }
}

