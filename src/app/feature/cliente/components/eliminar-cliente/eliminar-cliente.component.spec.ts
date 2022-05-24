import { waitForAsync, ComponentFixture,  TestBed,  } from '@angular/core/testing';
import { of } from 'rxjs';

import { EliminarClienteComponent } from './eliminar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

describe('EliminarClienteComponent', () => {
    let component: EliminarClienteComponent;
    let fixture: ComponentFixture<EliminarClienteComponent>;
    let clienteService: ClienteService;
    let router:Router;
  
    
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EliminarClienteComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule
        ],
        providers: [ClienteService, HttpService]
      })
        .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(EliminarClienteComponent);
      component = fixture.componentInstance;
      clienteService = TestBed.inject(ClienteService);
      spyOn(clienteService, 'eliminar').and.returnValue(
        of(true)
      );
      fixture.detectChanges();
      router = TestBed.get(Router);
    });
  

    it('Eliminando cliente',  () => {
      expect(component.eliminarForm.valid).toBeFalsy();
      component.eliminarForm.controls.id.setValue(1);
      expect(component.eliminarForm.valid).toBeTruthy();

      const navigateSpy = spyOn(router,'navigate');
      component.eliminar();
  
      expect(clienteService.eliminar).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledWith(['/cliente/consultar']);

      setTimeout(() => {
        expect(Swal.getTitle().textContent).toEqual('Usuario eliminado correctamente');
        Swal.clickConfirm();
      });
    
    });
  
  

});
