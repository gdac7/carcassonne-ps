# Carcassonne — Esboço (Trabalho de Faculdade)

Protótipo visual da tela inicial de uma versão web do jogo de tabuleiro **Carcassonne**, feito para fins acadêmicos.

Este esboço cobre apenas:

- **Menu principal**: Jogar, Configurações, Histórico, Sair.
- **Seleção de jogadores**: 5 slots, cada um alternando entre `Jogador` e `Computador` através de setas.

Nenhuma regra do jogo Carcassonne está implementada ainda — este é somente o fluxo de telas iniciais.

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Phaser](https://phaser.io/) para a renderização do jogo (cenas), embutido em um componente React
- [Vite](https://vitejs.dev/) como bundler/dev server
- Sem backend/API — 100% front-end estático

## Estrutura

```
src/
├── main.tsx            # bootstrap do React
├── App.tsx             # componente raiz, monta o container do Phaser
├── game/                # apresentação (cenas Phaser), sem regras de jogo
│   ├── PhaserGame.tsx   # wrapper React que instancia o Phaser.Game
│   ├── config.ts        # configuração do Phaser.Game
│   └── scenes/
│       ├── MainMenuScene.ts
│       └── PlayerSelectScene.ts
└── logic/               # lógica/domínio do jogo, isolada da UI
    ├── types.ts
    └── gameConfig.ts
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Créditos dos assets

- **Imagem de fundo**: recorte da iluminura de outubro do "Très Riches Heures du Duc de Berry" (Irmãos Limbourg, séc. XV), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Les_Tr%C3%A8s_Riches_Heures_du_duc_de_Berry_octobre.jpg), domínio público.
- **Música do menu**: "Lord of the Land" — Kevin MacLeod (incompetech.com), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lord_of_the_Land_(ISRC_USUAN1400022).mp3), licença [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

## Branches

- `main`: apenas o scaffold base do projeto.
- `dev`: linha de desenvolvimento principal do esboço.
- branches derivadas de `dev` para cada funcionalidade (ex.: cenas do menu, seleção de jogadores).
