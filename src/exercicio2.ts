export const exercicio2 = (data: string): string => {
    const dataFormatada = data.split("/").reverse().join("/")
    console.log(dataFormatada);
    
    return dataFormatada
}