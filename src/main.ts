import express, { Express, Request,  Response} from 'express';
import {encontraPokemon} from './services/PokeApiService.js';
import { addPokemonController } from './controllers/addPokemonController.js';
import { mostraCatalago } from './controllers/mostraCatalagoController.js';

const PORT:string = '3000';

const app: Express = express();


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    
})

app.use(express.json());



//registra rota

app.get('/', () => {
    console.log('teste');
})

//encontra o pokemon
app.get('/encontraPokemon/:nomePokemon', (req: Request, res: Response) => {
    encontraPokemon(req, res)
})

//adiciona pokemon ao catalago
app.post('/addPokemon/:nomePokemon', (req: Request, res: Response) => {
    addPokemonController(req, res)
})

//mostra catalago
app.get('/mostraCatalago', (req: Request, res: Response) => {
    mostraCatalago(req, res)
})

//app.use('/api', apiRoute)




export default app;