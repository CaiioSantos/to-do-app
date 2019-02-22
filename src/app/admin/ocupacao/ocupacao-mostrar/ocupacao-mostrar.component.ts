import { Ocupacao } from './../ocupacao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OcupacaoService } from '../ocupacao.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ocupacao-mostrar',
  templateUrl: './ocupacao-mostrar.component.html',
  styleUrls: ['./ocupacao-mostrar.component.css']
})
export class OcupacaoMostrarComponent implements OnInit {

  ocupacao: Ocupacao;
  urlId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ocupacaoService: OcupacaoService
  ) {
    this.urlId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.ocupacaoService.mostrar(this.urlId)
    .subscribe(
      res => {this.ocupacao = res;
      console.log(this.ocupacao);
      }
      );

  }
}
