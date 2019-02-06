import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ocupacao } from '../ocupacao';

@Component({
  selector: 'app-ocupacao-create',
  templateUrl: './ocupacao-create.component.html',
  styleUrls: ['./ocupacao-create.component.css']
})
export class OcupacaoCreateComponent implements OnInit {

  // declaração de variavel do objeto

  orderform: FormGroup;
  ocupacao: Ocupacao;

  constructor() { }

  ngOnInit() {
  }

}
