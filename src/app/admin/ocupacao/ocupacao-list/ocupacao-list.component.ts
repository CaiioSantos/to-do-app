import { Component, OnInit } from '@angular/core';
import { OcupacaoService } from '../ocupacao.service';
import { Ocupacao } from '../ocupacao';

@Component({
  selector: 'app-ocupacao-list',
  templateUrl: './ocupacao-list.component.html',
  styleUrls: ['./ocupacao-list.component.css']
})
export class OcupacaoListComponent implements OnInit {

  ocupacaos: Ocupacao[];

  constructor(private service: OcupacaoService) { }

  ngOnInit() {
    this.service.listar()
        .subscribe(response => {
          console.log(response);
          this.ocupacaos = response;
    });
  }

}
