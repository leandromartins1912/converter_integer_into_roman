import  ConverterService from "../service/ConverterService";

export class ConverterControllers {

    public convertIntegerintoRoman(numero: number) {
        return ConverterService.integerToRoman(numero);
    }
}