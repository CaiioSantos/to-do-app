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
  update(id: number , ocupacao: Ocupacao) {
    return this.httpClient.put(`${this.API}/${id}`, ocupacao);
  }
  mostrar(id: number) {
    return this.httpClient.get<Ocupacao>(`${this.API}/${id}`);
  }
  delete(id: number) {
    return this.httpClient.delete<Ocupacao>(`${this.API}/${id}`);
  }
}
