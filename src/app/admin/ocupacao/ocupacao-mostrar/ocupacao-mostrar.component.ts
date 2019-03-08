import { Ocupacao } from './../ocupacao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OcupacaoService } from '../ocupacao.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ocupacao-mostrar',
  templateUrl: './ocupacao-mostrar.component.html',
  styleUrls: ['./ocupacao-mostrar.component.css']
})
export class OcupacaoMostrarComponent implements OnInit {

  ocupacao: Ocupacao;
  urlId: number;

  ocupacao$: Observable<Ocupacao[]>;
  apiMsgSuccess: any;
  statusApiSuccess = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ocupacaoService: OcupacaoService,
    private router: Router

  ) {
    this.urlId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.ocupacaoService.mostrar(this.urlId)
    .subscribe(
      res => {this.ocupacao = res;
      }
      );
  }
  delete(id: number) {
    this.ocupacaoService.delete(id)
      .subscribe(res => { 
        this.apiMsgSuccess = res;
          this.statusApiSuccess = true;
          this.ocupacao$ = this.ocupacaoService.listar();
          setTimeout(() => this.statusApiSuccess = false, 5000 );
        });
        this.router.navigate(['/ocupacao/lista']);
    }
}
