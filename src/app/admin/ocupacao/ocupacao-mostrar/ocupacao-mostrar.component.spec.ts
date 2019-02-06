import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacaoMostrarComponent } from './ocupacao-mostrar.component';

describe('OcupacaoMostrarComponent', () => {
  let component: OcupacaoMostrarComponent;
  let fixture: ComponentFixture<OcupacaoMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacaoMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupacaoMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
