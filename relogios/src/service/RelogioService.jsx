import axios from 'axios';
import { axiosInstance } from './UsuarioService';


export class RelogioService {
    listarTodos(){
        return axiosInstance.get('/relogio');
    }
    excluir(id){
        return axiosInstance.delete(`/relogio/${id}`);
    }

    alterar(relogio){
        axiosInstance.put('/relogio', relogio);
    }

    inserir(relogio){
        return axiosInstance.post('/relogio', relogio)
    }

    buscarPorId(id){
        return axiosInstance.get(`/relogio/${id}`);
    }


}