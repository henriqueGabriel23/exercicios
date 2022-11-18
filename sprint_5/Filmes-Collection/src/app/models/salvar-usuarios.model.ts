export interface CriarUsuario{
    id:number
    nome:string
    email:string
    telefone:string
}
export interface CriarFilmes{
    id:number
    nome:string
    generoId:number
    genero?:CriarGenero
}
export interface CriarGenero{
    id:number
    genero:string
}