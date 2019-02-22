import { Injectable } from '@angular/core';
import { Ocupacao } from './ocupacao';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcupacaoService {

  private urlApi: string;
  private readonly API = `${environment.API}/tarefa`;

  constructor(
    private httpClient: HttpClient
  ) {
  }

  listar() {
    return this.httpClient.get<Ocupacao[]>(this.API);
  }
  create(ocupar: Ocupacao) {
    return this.httpClient.post(this.API, ocupar);
  }
  update() {

  }
  mostrar(id: number) {
    return this.httpClient.get<Ocupacao>(`${this.API}/${id}`);
  }
}
