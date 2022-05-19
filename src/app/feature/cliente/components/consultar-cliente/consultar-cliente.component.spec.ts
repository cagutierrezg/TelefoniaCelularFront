import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ConsultarClienteComponent } from './consultar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { Cliente } from '../../shared/model/cliente';
import { HttpService } from 'src/app/core/services/http.service';

describe('ConsultarClienteComponent', () => {
  let component: ConsultarClienteComponent;
  let fixture: ComponentFixture<ConsultarClienteComponent>;
  let clienteService: ClienteService;
  const listaCliente: Cliente[] = [new Cliente(1, 'CC', '1373828423', 'PEPITO', '3172834132', 'plan golden','30.000', 42)];

  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarClienteComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ClienteService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'consultar').and.returnValue(
      of(listaCliente)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
