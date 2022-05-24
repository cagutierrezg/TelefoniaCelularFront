import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearClienteComponent } from './crear-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


describe('CrearClienteComponent', () => {
  let component: CrearClienteComponent;
  let fixture: ComponentFixture<CrearClienteComponent>;
  let clienteService: ClienteService;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClienteComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ClienteService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'guardar').and.returnValue(
      of(5)
    );
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.clienteForm.valid).toBeFalsy();
  });

  it('Registrando cliente', () => {
    expect(component.clienteForm.valid).toBeFalsy();
    component.clienteForm.controls.documentType.setValue('CC');
    component.clienteForm.controls.documentNumber.setValue('1045783544');
    component.clienteForm.controls.clientName.setValue('pepito');
    component.clienteForm.controls.phoneNumber.setValue('3167818273');
    component.clienteForm.controls.planId.setValue('1');
    component.clienteForm.controls.planValue.setValue('20.000');
    component.clienteForm.controls.startDate.setValue('2022-04-06 01:34:00');
    
    const navigateSpy = spyOn(router,'navigate');
    component.cerar();

     
    expect(clienteService.guardar).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/cliente/consultar']);

    setTimeout(() => {
      expect(Swal.getTitle().textContent).toEqual('Usuario creado correctamente');
      Swal.clickConfirm();
    });

  });
});
