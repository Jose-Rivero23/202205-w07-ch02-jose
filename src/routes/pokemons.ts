import { Router } from 'express';
import {
    deleteController,
    getController,
    getIdController,
    patchController,
    postController,
} from '../controllers/pokemons-controller.js';

export const routerPokemon = Router();

routerPokemon.get('/', getController);
routerPokemon.get('/:id', getIdController);
routerPokemon.post('/', postController);
routerPokemon.patch('/:id', patchController);
routerPokemon.delete('/:id', deleteController);
