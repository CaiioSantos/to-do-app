import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupacaoUpdateComponent } from './ocupacao-update.component';

describe('OcupacaoUpdateComponent', () => {
  let component: OcupacaoUpdateComponent;
  let fixture: ComponentFixture<OcupacaoUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacaoUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupacaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
