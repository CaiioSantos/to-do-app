import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacaoCadastroComponent } from './ocupacao-cadastro.component';

describe('OcupacaoCadastroComponent', () => {
  let component: OcupacaoCadastroComponent;
  let fixture: ComponentFixture<OcupacaoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacaoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
