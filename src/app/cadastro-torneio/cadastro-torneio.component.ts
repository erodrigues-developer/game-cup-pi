import { Component, OnInit } from '@angular/core';
import { TorneioService } from '../torneio.service';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

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
  key = "-LElURGy_KfKTQkjVbKo";

  constructor(private torneio: TorneioService, private db: AngularFireDatabase) { }

  ngOnInit(){}

  /**
   * Método executado na sumissão do formulário
   * Verifica se é edição ao adição de novos dados e persiste na base de dados e na api
   * @param f 
   * @author Erodrigues
   * @since 11/06/2018
   */
  salvar (f) {
    
          
    // Reseta o formulário
    f.reset();
  }

  private save (){
    // Chama o serviço torneio e insere no challonge através da api
    this.torneio.salvar(this.nome, this.url)
      .then(dados => {
        console.log(dados.tournament);
        this.id         = dados.tournament.id;
        this.nome       = dados.tournament.name;
        this.url        = dados.tournament.url;
        this.link       = dados.tournament.full_challonge_url;
        this.display    = true;
        // Salva no firebase
        const dadosFireBase = {
          id: this.id,
          nome: this.nome,
          url: this.url,
          link: this.link
        };
        console.log(dadosFireBase);
        this.db.list("usuarios/" + this.key + "/torneios").push(dadosFireBase)
          .then((t: any) => console.log(t.key)),
            (e: any) => console.log(e.message);
        
    });
  }

  criarUrl(v: string){
    // Remove os espaços
    v = v.split(" ").join("");

    // Transforma em minúsculas
    v = v.toLowerCase();

    // Atribui a propriedade url
    this.url = v;
  }

  ok(){
    this.display = false;
  }

}
