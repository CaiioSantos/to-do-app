import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Ocupacao } from '../ocupacao';
import { Router } from '@angular/router/';
import { OcupacaoService } from '../ocupacao.service';

@Component({
  selector: 'app-ocupacao-cadastro',
  templateUrl: './ocupacao-cadastro.component.html',
  styleUrls: ['./ocupacao-cadastro.component.css']
})
export class OcupacaoCadastroComponent implements OnInit {

  orderForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private ocupacaoService: OcupacaoService
    ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      title: [null],
      description: [null]
    });
  }
  salvar() {
    const newOcupacao = this.orderForm.getRawValue() as Ocupacao;
      this.ocupacaoService.create(newOcupacao)
      .subscribe(res => {
      },
      error => {
      }
      );
      this.router.navigate(['/ocupacao/lista']);
  }
}
