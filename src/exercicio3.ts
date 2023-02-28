export interface arrayDeUsers {
    name: string,
    email: string
}
const users: arrayDeUsers[] = [
    {
        name: "Arthur",
        email: "arthur@email.com"
    },
    {
        name: "Astrodev",
        email: "astrodev@email.com"
    },
    {
        name: "João",
        email: "joao@email.com"
    }
]

export const exercicio3 = (userName: string) => {
    const result = users.find((user) =>{
        if(user.name === userName){
            return true
        }
    })
    return result
}