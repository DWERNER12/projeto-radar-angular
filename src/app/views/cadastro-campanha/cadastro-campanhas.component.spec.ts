import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroCampanhasComponent } from './cadastro-campanhas.component';

describe('CadastroCampanhasComponent', () => {
  let component: CadastroCampanhasComponent;
  let fixture: ComponentFixture<CadastroCampanhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroCampanhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroCampanhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
