import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLojasComponent } from './cadastro-lojas.component';

describe('CadastroLojasComponent', () => {
  let component: CadastroLojasComponent;
  let fixture: ComponentFixture<CadastroLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroLojasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
