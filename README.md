# Pokédex TypeScript Lite

## Descrição do projeto

Pokédex TypeScript Lite é uma API REST desenvolvida em TypeScript que permite gerenciar um catálogo pessoal de Pokémon. A aplicação consome a [PokéAPI](https://pokeapi.co/) para buscar dados dos Pokémon e os armazena localmente em um arquivo JSON (`pc_box.json`), funcionando como uma "PC Box" do mundo Pokémon.

## Objetivo

Fornecer uma ferramenta simples via API para adicionar, listar e remover Pokémon de um catálogo local, servindo como projeto de estudo e prática com TypeScript, Express, consumo de APIs externas e persistência de dados.

## Tecnologias utilizadas

- **Node.js** — ambiente de execução JavaScript
- **TypeScript** — superset tipado do JavaScript
- **Express** — framework web para criação da API REST
- **tsx** — executor TypeScript para Node.js
- **PokéAPI** — API pública de dados Pokémon
- **fs/promises** — módulo nativo do Node.js para leitura/escrita de arquivos

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (gerenciador de pacotes do Node.js)

## Como instalar

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Acesse o diretório do projeto
cd "Pokédex TypeScript Lite"

# Instale as dependências
npm install
```

## Como executar

```bash
npm run start
```

O servidor será iniciado em `http://localhost:3000`.

## Funcionalidades

- **Adicionar Pokémon** — busca um Pokémon na PokéAPI pelo nome e o adiciona ao catálogo local
- **Listar catálogo** — exibe todos os Pokémon presentes no catálogo
- **Remover Pokémon** — remove um Pokémon do catálogo pelo seu ID
- **Persistência local** — os dados são salvos automaticamente no arquivo `pc_box.json`

## Exemplos de execução

### Adicionar Pokémon ao catálogo

```bash
curl -X POST http://localhost:3000/addPokemon/pikachu
```

**Resposta API:**
```json
{
  "mensagem": "[OK] pikachu adicionado ao catálogo.",
  "pokemon": {
    "id": 25,
    "nome": "pikachu",
    "tipos": ["electric"],
    "altura": 4,
    "peso": 60
  }
}
```

**Resposta Terminal:**
```
Procurando pokemon: pikachu...
Pokemon encontrado!
[OK] pikachu adicionado ao catálogo.
```

---

### Tentar adicionar Pokémon duplicado

```bash
curl -X POST http://localhost:3000/addPokemon/pikachu
```

**Resposta API:**
```json
{
  "mensagem": "[AVISO] pikachu já está no catálogo."
}
```

**Resposta Terminal:**
```
Procurando pokemon: pikachu...
Pokemon encontrado!
[AVISO] pikachu já está no catálogo.
```

---

### Adicionar outro Pokémon

```bash
curl -X POST http://localhost:3000/addPokemon/charmander
```

**Resposta API:**
```json
{
  "mensagem": "[OK] charmander adicionado ao catálogo.",
  "pokemon": {
    "id": 4,
    "nome": "charmander",
    "tipos": ["fire"],
    "altura": 6,
    "peso": 85
  }
}
```

**Resposta Terminal:**
```
Procurando pokemon: charmander...
Pokemon encontrado!
[OK] charmander adicionado ao catálogo.
```


### Listar o catálogo

```bash
curl http://localhost:3000/mostraCatalago
```

**Resposta API:**
```json
{
  "catalagoAtual": [
    {
      "id": 25,
      "nome": "pikachu",
      "tipos": ["electric"],
      "altura": 4,
      "peso": 60
    },
    {
      "id": 4,
      "nome": "charmander",
      "tipos": ["fire"],
      "altura": 6,
      "peso": 85
    }
  ]
}
```

**Resposta Terminal:**
```
Catalago Atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

---

### Buscar Pokémon inexistente

```bash
curl -X POST http://localhost:3000/addPokemon/pokemon-inexistente
```

**Resposta API:**
```json
{
  "mensagem": "[ERRO] Pokémon não encontrado: pokemon-inexistente"
}
```

**Resposta Terminal:**
```
Procurando pokemon: pokemon-inexistente...
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

---

### Remover Pokémon pelo ID

```bash
curl -X DELETE http://localhost:3000/removePokemon/25
```

**Resposta API:**
```json
{
  "mensagem": "[OK] Pokémon removido do catálogo.",
  "catalagoAtual": [
    {
      "id": 4,
      "nome": "charmander",
      "tipos": ["fire"],
      "altura": 6,
      "peso": 85
    }
  ]
}
```

**Resposta Terminal:**
```
[OK] Pokémon removido do catálogo.
Catalago Atual:
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

---

### Tentar remover ID inexistente

```bash
curl -X DELETE http://localhost:3000/removePokemon/999
```

**Resposta API:**
```json
{
  "mensagem": "[AVISO] Nenhum Pokémon encontrado com esse ID."
}
```

**Resposta Terminal:**
```
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

## Explicação curta dos arquivos

```
src/
├── main.ts                         — entry point do servidor Express e definição das rotas
├── controllers/
│   ├── addPokemonController.ts     — lógica da rota POST /addPokemon/:nomePokemon
│   ├── removePokemonIdController.ts — lógica da rota DELETE /removePokemon/:idPokemon
│   └── mostraCatalagoController.ts  — lógica da rota GET /mostraCatalago
├── models/
│   ├── Pokemon.ts                  — interfaces PokemonApiResponse e PokemonResumo
│   ├── CatalagoPokemon.ts          — classe estática Catalago (add, remove, listar, persistir)
│   └── CustomErrors.ts             — arquivo placeholder para erros customizados
├── services/
│   ├── PokeApiService.ts           — função encontraPokemon() que consome a PokéAPI
│   └── BoxService.ts               — funções carregaPcBox() e salvarPcBox() para I/O em JSON
└── utils/
    └── textFormatters.ts           — funções utilitárias de formatação de texto
```

## Link do Kanban

> _[https://trello.com/invite/b/6a25edea3bdabab2df6e06b3/ATTIebeb490e451fe59765f7ee366c97c5bd5594F070/mini-projeto-senai]_

## Branches utilizadas

- `main` — branch principal
- `develop` — branch de desenvolvimento
- `feat/pokedex` — branch de desenvolvimento das features
- `docs/readme` — branch de documentação do README
