import { exercicio2 } from "../src/exercicio2";

describe("testando o arquivo exercicio2.ts", ()=>{
    test("A função recebe um data no formato 'aaaa/mm/dd' e retorna outra string no formato 'dd/mm/aaaa' ", ()=>{
        const data = "2023/09/26"
        const result = exercicio2(data)

        expect(result).toEqual("26/09/2023")
    })
})