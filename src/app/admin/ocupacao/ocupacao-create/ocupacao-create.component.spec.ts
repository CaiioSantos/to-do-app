import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacaoCreateComponent } from './ocupacao-create.component';

describe('OcupacaoCreateComponent', () => {
  let component: OcupacaoCreateComponent;
  let fixture: ComponentFixture<OcupacaoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacaoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupacaoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
