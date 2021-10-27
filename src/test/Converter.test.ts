import ConversorService from '../service/ConverterService';

describe("converter", () => {
    describe("integerToRoman", () => {
        it("Should return 'X' roman algorism when send number ten", () => {
            const resultCalculate = ConversorService.integerToRoman(10);
            expect(resultCalculate).toBe("X");
        });
        it("Should not return 'X' roman algorism when send number ten", () => {
            const resultCalculate = ConversorService.integerToRoman(10);
            expect(resultCalculate).not.toBe("XI");
        });

        it("Should return empty when send number zero", () => {
            const resultCalculate = ConversorService.integerToRoman(0);
            expect(resultCalculate).toBe("");
        });
    });
});
