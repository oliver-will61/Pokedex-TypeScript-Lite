import { Pokemon } from '../models/Pokemon.js';
import { APIError } from '../models/CustomErrors.js';

const BASE_URL = 'https://pokeapi.co/api/v2';

export class PokeApiService {
  async getPokemon(nameOrId: string | number): Promise<Pokemon> {
    const response = await fetch(`${BASE_URL}/pokemon/${nameOrId}`);

    if (!response.ok) {
      throw new APIError(
        `Pokémon "${nameOrId}" não encontrado`,
        response.status,
      );
    }

    const data = await response.json();
    return this.mapToPokemon(data);
  }

  private mapToPokemon(data: any): Pokemon {
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types.map((t: any) => t.type.name),
      abilities: data.abilities.map((a: any) => a.ability.name),
      sprite: data.sprites.front_default ?? '',
    };
  }
}
