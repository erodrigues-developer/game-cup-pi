import { Component, OnInit } from '@angular/core';
import { TorneioService } from '../torneio.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-torneio',
  templateUrl: './cadastro-torneio.component.html',
  styleUrls: ['./cadastro-torneio.component.css']
})
export class CadastroTorneioComponent implements OnInit {
  
  id: number;
  nome: String = '';
  url: String = '';
  display = false;
  link = "#";

  constructor(private torneio: TorneioService) { }

  ngOnInit(){}

  salvar (f) {
    // Chama o serviço torneio e insere no challonge através da api
    this.torneio.salvar(this.nome, this.url)
      .then(dados => {
        console.log(dados.tournament);
        this.id         = dados.tournament.id;
        this.nome       = dados.tournament.name;
        this.url        = dados.tournament.url;
        this.link       = dados.tournament.full_challonge_url;
        this.display    = true;
      });
    // Reseta o formulário
    f.reset();
    // Cria o objeto para salvar no firebase
  }

  criarUrl(v: string){
    this.url = v.split(" ").join("");
  }

  ok(){
    this.display = false;
  }

}
