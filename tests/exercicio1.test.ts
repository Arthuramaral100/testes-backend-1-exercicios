import {exercicio1} from "../src/exercicio1"
describe("Testeando o arquivo exercicio1.ts", () =>{
    test("A função transforma uma string em number", () =>{
        const num = "50"
        const resultadoEsperado = 50
        const result = exercicio1(num)

        expect(result).toEqual(resultadoEsperado)
    })
})