import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ActualizarClienteComponent } from './actualizar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

describe('ActualizarClienteComponent', () => {
  let component: ActualizarClienteComponent;
  let fixture: ComponentFixture<ActualizarClienteComponent>;
  let clienteService: ClienteService;
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarClienteComponent ],
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
    fixture = TestBed.createComponent(ActualizarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'actualizar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.actualizarForm.valid).toBeFalsy();
  });

  it('Registrando cliente', () => {
    expect(component.actualizarForm.valid).toBeFalsy();
    component.actualizarForm.controls.id.setValue(1);
    component.actualizarForm.controls.planId.setValue('1');
    component.actualizarForm.controls.planValue.setValue('20.000');
    

    const navigateSpy = spyOn(router,'navigate');
    component.actualizar();
  
      expect(clienteService.actualizar).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledWith(['/cliente/consultar']);

      setTimeout(() => {
        expect(Swal.getTitle().textContent).toEqual('Usuario actualizado correctamente');
        Swal.clickConfirm();
      });
    
  });
});
