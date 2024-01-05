import api from "../service/api"



export async function listarTodos(){
    try{
        const resultado = await api.get('/postos/listar').then(
            response => {
                console.log(response.data)
            }
        )
        return resultado
    }catch(error){
        console.log(error)
        return{}
    }
}