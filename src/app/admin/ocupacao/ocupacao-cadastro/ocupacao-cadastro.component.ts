import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ocupacao-cadastro',
  templateUrl: './ocupacao-cadastro.component.html',
  styleUrls: ['./ocupacao-cadastro.component.css']
})
export class OcupacaoCadastroComponent implements OnInit {

  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      title: [null],
      description: [null]
    });

  }
  salvar() {
  }
}
