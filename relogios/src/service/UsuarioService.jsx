import axios from 'axios';

export const axiosInstance = axios.create(
    {baseURL: 'http://localhost:8080'}
)

export class UsuarioService {
    listarTodos(){
        return axiosInstance.get('/usuario');
    }
    excluir(id){
        return axiosInstance.delete(`/usuario/${id}`);
    }

    alterar(usuario){
        axiosInstance.put('/usuario', usuario);
    }

    inserir(usuario){
        return axiosInstance.post('/usuario', usuario)
    }


}