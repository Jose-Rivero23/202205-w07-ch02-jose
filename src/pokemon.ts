interface iPokemon {
    id: number;
    name: string;
    level: number;
    type: string;
    shiny: boolean;
}

export const initialPokemons: Array<iPokemon> = [
    { id: 25, name: 'pikachu', level: 34, type: 'electricity', shiny: false },
    { id: 7, name: 'squirtle', level: 28, type: 'Whater', shiny: false },
    { id: 4, name: 'charmander', level: 16, type: 'Fire', shiny: true },
];
