import { api } from "@/infra/api"

export const buscarPessoas = async() =>{
    const response= await api.get('/pessoa');
    return response.data;
}