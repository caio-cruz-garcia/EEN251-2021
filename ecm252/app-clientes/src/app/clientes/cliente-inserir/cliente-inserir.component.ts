import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css']
})
export class ClienteInserirComponent implements OnInit {


  //@Output() clienteAdiciondo = new EventEmitter<Cliente>();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }
  
  onAdicionarClientes(form: NgForm){ 
    if(form.invalid) return;
    this.clienteService.adicionarClientes(
      form.value.nome,
      form.value.fone,
      form.value.email
    );
    }
    
}

