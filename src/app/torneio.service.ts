import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from 'selenium-webdriver/http';
import { CadastroTorneioComponent } from './cadastro-torneio/cadastro-torneio.component';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TorneioService {
  private url_api;
  dados;

  constructor(private httpClient: HttpClient) { }

  buscar_todos (): Promise<any> {
    this.url_api = 'https://api.challonge.com/v1/tournaments.json'+
                                  '?api_key=HFQp64rnt3zSP216dLZ1A3KmIXjkyCHf66W4bwAu';

    return this.httpClient.get(this.url_api)
      .toPromise()
      .then(response => response)
      .catch(console.log);
  }

  burcar_por_id (id) {

  }
  
  salvar (nome: String, url:String): Promise<any> {
    this.url_api = 'https://api.challonge.com/v1/tournaments.json'+
                                '?api_key=HFQp64rnt3zSP216dLZ1A3KmIXjkyCHf66W4bwAu'+
                                '&tournament[name]='+nome+
                                '&tournament[url]='+url;

    return this.httpClient.post(this.url_api, {})
    .toPromise()
    .then(response => response )
    .catch(console.log);
  }
  
}
