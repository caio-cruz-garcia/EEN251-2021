import {Cliente} from './cliente.model'
import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class ClienteService{
    private clientes: Cliente[] = [];
    
    getClientes(): Cliente[]{
        return [...this.clientes];
    }

    adicionarClientes(nome: string, fone:string, email:string){
        const clientes: Cliente = {
            nome,
            fone,
            email
        }
    }
}
