import { PokeApiService } from '../services/PokeApiService.js';
import { BoxService } from '../services/BoxService.js';
import { Pokemon } from '../models/Pokemon.js';

export class TerminalController {
  constructor(
    private readonly apiService: PokeApiService,
    private readonly boxService: BoxService<Pokemon>,
  ) {}

  async run(): Promise<void> {
    // TODO: implementar loop principal do menu
    console.log('Pokédex TypeScript Lite');
  }
}
