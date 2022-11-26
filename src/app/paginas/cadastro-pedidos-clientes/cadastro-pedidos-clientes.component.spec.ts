import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPedidosClientesComponent } from './cadastro-pedidos-clientes.component';

describe('CadastroPedidosClientesComponent', () => {
  let component: CadastroPedidosClientesComponent;
  let fixture: ComponentFixture<CadastroPedidosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPedidosClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPedidosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
