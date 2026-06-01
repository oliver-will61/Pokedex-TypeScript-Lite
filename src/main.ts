import { TerminalController } from './controllers/TerminalController.js';
import { PokeApiService } from './services/PokeApiService.js';
import { BoxService } from './services/BoxService.js';
import { Pokemon } from './models/Pokemon.js';

async function main(): Promise<void> {
  const apiService = new PokeApiService();
  const boxService = new BoxService<Pokemon>('pc_box.json');
  const controller = new TerminalController(apiService, boxService);

  await controller.run();
}

main();
