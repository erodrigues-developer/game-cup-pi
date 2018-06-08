import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TorneioService {
  private url_api = 'https://api.challonge.com/v1/tournaments.json?api_key=HFQp64rnt3zSP216dLZ1A3KmIXjkyCHf66W4bwAu&tournament[name]=oiiiasdfasdfasd&tournament[url]=oiiiiasdfsadfasiiurlsdfajslkjdf';
  private api_key = 'HFQp64rnt3zSP216dLZ1A3KmIXjkyCHf66W4bwAu';
  private metodo = 'tournaments.json';

  nome = '';
  url = '';

  constructor(private httpClient: HttpClient) { }

  buscar_todos () {

  }

  burcar_por_id (id: any) {

  }
  
  salvar (nome, url) {
    this.nome = nome;
    this.url = url;

    this.url_api = 'https://api.challonge.com/v1/tournaments.json?api_key=HFQp64rnt3zSP216dLZ1A3KmIXjkyCHf66W4bwAu&tournament[name]='+this.nome+'&tournament[url]='+this.url+'';

    this.httpClient.post(this.url_api, {
      
        "api_key": this.api_key,
        "tournament":{
          "name":this.nome,
          "url": this.url
        } 
      
    },
    {observe: 'response'})
    .toPromise()
    .then(response => {
      console.log(response);
    })
    .catch(console.log);
  }



}
