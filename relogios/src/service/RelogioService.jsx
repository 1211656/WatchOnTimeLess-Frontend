import axios from 'axios';
import { axiosInstance } from './UsuarioService';


export class RelogioService {
    listarTodos(){
        return axiosInstance.get('/product');
    }
    excluir(id){
        return axiosInstance.delete(`/product/${id}`);
    }

    alterar(relogio){
        axiosInstance.put('/product', relogio);
    }

    inserir(relogio){
        return axiosInstance.post('/product', relogio)
    }

    buscarPorId(id){
        return axiosInstance.get(`/product/${id}`);
    }


}