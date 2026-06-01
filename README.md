# Pokédex TypeScript Lite

Pokédex CLI em TypeScript que consome a [PokéAPI](https://pokeapi.co/) e oferece persistência local em arquivo JSON.

## Funcionalidades

- Busca de Pokémon por nome ou ID através da PokéAPI
- Exibição de informações detalhadas (nome, ID, altura, peso, tipos, habilidades, sprite)
- Salvamento de Pokémon em uma "Box" local (arquivo `pc_box.json`)
- Listagem, remoção e consulta de Pokémon salvos localmente
- Interface interativa via terminal

## Estrutura do Projeto

```
src/
├── main.ts                  # Ponto de entrada da aplicação
├── controllers/
│   └── TerminalController.ts # Controlador do menu interativo no terminal
├── models/
│   ├── Pokemon.ts            # Interface do modelo Pokémon
│   └── CustomErrors.ts       # Classes de erro personalizadas (APIError, LocalBoxError)
├── services/
│   ├── PokeApiService.ts     # Comunicação com a PokéAPI
│   └── BoxService.ts         # CRUD genérico para persistência local em JSON
└── utils/
    └── textFormatters.ts     # Utilitários de formatação de texto
```

## Modelo de Dados

```typescript
interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  sprite: string;
}
```

## Pré-requisitos

- Node.js >= 18 (para suporte nativo a `fetch`)
- npm

## Instalação

```bash
npm install
```

## Uso

```bash
npm run dev
```

Para compilar:

```bash
npm run build
```

Os arquivos compilados serão gerados no diretório `dist/`.

## Tecnologias

- **TypeScript** — tipagem estática e segurança em tempo de desenvolvimento
- **PokéAPI** — API pública de dados de Pokémon
- **tsx** — execução direta de TypeScript em desenvolvimento
- **Node.js** — runtime com fetch nativo (ES2022)

## Licença

MIT
