import express, { Express, Request,  Response} from 'express';
import { addPokemonController } from './controllers/addPokemonController.js';
import {removePokemonIdController} from './controllers/removePokemonIdController.js';
import { mostraCatalago } from './controllers/mostraCatalagoController.js';

//porta
const PORT:string = '3000';

const app: Express = express();


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    
})


app.use(express.json());

//registra de rotas

//adiciona pokemon ao catalago
app.post('/addPokemon/:nomePokemon', (req: Request, res: Response) => {
    addPokemonController(req, res)
})

//remove pokemon pelo ID
app.delete('/removePokemon/:idPokemon', (req: Request, res: Response) => {
    
    removePokemonIdController(req, res)
})

//mostra catalago
app.get('/mostraCatalago', (req: Request, res: Response) => {
    mostraCatalago(req, res)
})

export default app;