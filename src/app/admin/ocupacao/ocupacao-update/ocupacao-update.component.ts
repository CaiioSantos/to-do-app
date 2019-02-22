import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ocupacao } from '../ocupacao';
import { Router, ActivatedRoute } from '@angular/router';
import { OcupacaoService } from '../ocupacao.service';
@Component({
  selector: 'app-ocupacao-update',
  templateUrl: './ocupacao-update.component.html',
  styleUrls: ['./ocupacao-update.component.css']
})
export class OcupacaoUpdateComponent implements OnInit {

  orderform: FormGroup;
  idUrl: number;
  ocupacao: Ocupacao;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ocupacaoService: OcupacaoService
  ) {
    this.idUrl = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.orderform = this.formBuilder.group({
      title: [null],
      description: [null]
    });
    this.ocupacaoService.mostrar(this.idUrl)
      .subscribe( res => {
        this.ocupacao = res;

        this.orderform.patchValue({
          title: this.ocupacao.title,
          description: this.ocupacao.description
        });
      });
  }
  editar () {
    const dataform = this.orderform.getRawValue() as Ocupacao;

    this.ocupacaoService.update(this.idUrl, dataform)
      .subscribe( es => {
        this.router.navigate(['ocupacao/lista'])
      });
  }

}
