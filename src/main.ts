import express, { Express, Request,  Response} from 'express';
import {encontraPokemon} from './services/PokeApiService.js'

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

app.get('/encontraPokemon/:nomePokemon', (req: Request, res: Response) => {
    
    encontraPokemon(req, res)

})

//app.use('/api', apiRoute)




export default app;