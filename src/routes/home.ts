import { Router } from 'express';

export const routerHome = Router();

routerHome.get('/', (req, res) => {
    req;
    res.setHeader('Content-type', 'text-html');
    res.end(`<h1>Welcome to the pokedex</h1> 
     <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt=""
    />`);
});
