import axios from 'axios';

export const axiosInstance = axios.create(
    {baseURL: 'http://localhost:8080'}
)

export class UsuarioService {
    listarTodos(){
        return axiosInstance.get('/client');
    }
    excluir(id){
        return axiosInstance.delete(`/client/${id}`);
    }

    alterar(usuario){
        axiosInstance.put('/client', usuario);
    }

    inserir(usuario){
        return axiosInstance.post('/client', usuario)
    }


}