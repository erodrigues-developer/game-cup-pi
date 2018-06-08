import { Component } from '@angular/core';
import { TorneioService } from '../torneio.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-torneio',
  templateUrl: './cadastro-torneio.component.html',
  styleUrls: ['./cadastro-torneio.component.css']
})
export class CadastroTorneioComponent {
  
  nome: String = '';
  url: String = '';

  constructor(private torneio: TorneioService) { }

  salvar () {
    
    this.torneio.salvar(this.nome, this.url);  
  }

  reset () {

  }

}
