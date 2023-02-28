import { exercicio3 } from "../src/exercicio3"

describe("Testando o arquivo exercicio3.ts", ()=>{
    test("A função busca um user pelo nome enviado", () =>{
        const result = exercicio3("Astrodev")
        expect(result).toBeTruthy()
    })
})