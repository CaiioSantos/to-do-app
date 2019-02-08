import { Injectable } from '@angular/core';
import { Ocupacao } from './ocupacao';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcupacaoService {

  private urlApi: string;
  private readonly API = `${environment.API}ocupacao`;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  listar() {
    return this.httpClient.get<Ocupacao[]>('http://127.0.0.1:8000/api/tarefa');
  }
  create(ocupar: Ocupacao) {
    return this.httpClient.post(this.API, ocupar);
  }


}
