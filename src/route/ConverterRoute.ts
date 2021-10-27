import { Router } from 'express';
import { ConverterControllers } from '../controller/ConverterController';

export const routerConversor = Router();
const converterCtrl = new ConverterControllers();

/**
 * Serviço para converter numero informado de inteiro para romano.
 */
routerConversor.get('/:number', async (req, res) => {
    const number = parseInt(req.params.number);
    const converted = await converterCtrl.convertIntegerintoRoman(number);
    res.send({ convertedNumber: converted });
});