import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { routerConversor } from './route/conversor';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs
 */
app.use(logger('dev'));

/**
 * Configuração de rotas
 */

app.use('/conversor', routerConversor);
app.use('/', (req, res) => res.send('API converção Inteiros em Romanos'));