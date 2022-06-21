import { app } from './app.js';
import http from 'http';
import morgan from 'morgan';
import express from 'express';
import { routerPokemon } from './routes/pokemons.js';
import { routerHome } from './routes/home.js';

app.use(morgan('dev'));
app.use(express.json());

const PORT = process.env.PORT || 1473;

const onError = () => {};
const onListening = () => {};
app.set('port', PORT);

const pokeserver = http.createServer(app);
console.log('pUERTO USADO' + PORT);

app.use('/', routerHome);
app.use('/pokemon', routerPokemon);
pokeserver.listen(PORT);
pokeserver.on('error', onError);
pokeserver.on('listening', onListening);
