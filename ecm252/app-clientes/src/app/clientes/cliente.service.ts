import { Inject, Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ClienteService{
  private clientes: Cliente[] = [];

constructor (private httpclient: HttpClient){

}

  private listaClientesAtualizada = new Subject<Cliente[]>();

  getClientes (): void{
    this.httpclient.get<{mensagem: string, clientes: Cliente[]}>('http://localhost:3000/api/clientes').subscribe((dados)=>{
      this.clientes = dados.clientes;
      this.listaClientesAtualizada.next([...this.clientes]);
    })
  }

  adicionarCliente(nome: string, fone: string, email: string){
    const cliente: Cliente = {nome, fone, email};
    this.httpclient.post<{mensagem: string}>('http://localhost:3000/api/clientes', cliente).subscribe((dados)=>{
      this.clientes.push(cliente);
      this.listaClientesAtualizada.next([...this.clientes]);
    })
    //clientes = [1,2,3] => ...clientes 1,2,3
    //operador spread
  }


  getListaDeClienteAtualizadaObservable(){
    return this.listaClientesAtualizada.asObservable();
  }
}