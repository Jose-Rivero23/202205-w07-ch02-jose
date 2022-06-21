//separar las funciones de get post patch
import { Response, Request } from 'express';

import fs from 'fs/promises';

const dataFilePath = './data/pokemons.json';
let pokemons = JSON.parse(
    await fs.readFile(dataFilePath, {
        encoding: 'utf8',
    })
);

console.log(pokemons);

export const getController = async (req: Request, res: Response) => {
    req;
    res.setHeader('Content-type', 'text-html');
    res.end(`<h1>Welcome</h1> <p>${pokemons}</p>`);
};
export const getIdController = (req: Request, res: Response) => {
    res.setHeader('Content-type', 'text-html');
    const pokemon = pokemons.pokeArray.find(
        (item) => item.id === +req.params.id
    );
    if (pokemon) {
        res.end(`<div>
         <img
       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
         alt="" width="150px"
     />  <p> ID: ${pokemon.id}</p>
         <p> Nombre: ${pokemon.name}</p>
         <p> Nivel: ${pokemon.level}</p>
         <p> Shiny: ${pokemon.shiny}</p>
         <p> Tipo: ${pokemon.type}</p>
        </div>`);
    } else {
        res.status(404);
        res.end(`{}`);
    }
};
export const postController = async (req: Request, res: Response) => {
    const newContent = {
        ...req.body,
        id: pokemons.pokeArray[pokemons.pokeArray.length - 1].id + 1,
    };
    pokemons.pokeArray.push(newContent);
    await fs.writeFile(dataFilePath, JSON.stringify(pokemons));
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(newContent));
};
export const patchController = async (req: Request, res: Response) => {
    let newPokemon;
    pokemons.pokeArray = pokemons.pokeArray.map((item) => {
        newPokemon = { ...item, ...req.body };
        if (item.id === +req.params.id) {
            return newPokemon;
        } else {
            return item;
        }
    });
    await fs.writeFile(dataFilePath, pokemons);
    res.setHeader('Content-type', 'application/json');
    res.end('HOlaaa se ha updateado');
};
export const deleteController = async (req: Request, res: Response) => {
    let prevLength = pokemons.pokeArray.length;
    pokemons.pokeArray = pokemons.pokeArray.filter(
        (item) => item.id !== +req.params.id
    );

    if (prevLength === pokemons.pokeArray.length) {
        res.status(404);
        res.end(JSON.stringify({}));
    } else {
        res.status(200);
        await fs.writeFile(dataFilePath, JSON.stringify(pokemons));
    }
};
