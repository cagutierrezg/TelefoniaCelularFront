import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EliminarClienteComponent } from './eliminar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from '../../shared/service/cliente.service';
import { HttpService } from 'src/app/core/services/http.service';

describe('EliminarClienteComponent', () => {
    let component: EliminarClienteComponent;
    let fixture: ComponentFixture<EliminarClienteComponent>;
    let clienteService: ClienteService;
  
    
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EliminarClienteComponent],
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
      fixture = TestBed.createComponent(EliminarClienteComponent);
      component = fixture.componentInstance;
      clienteService = TestBed.inject(ClienteService);
      spyOn(clienteService, 'eliminar').and.returnValue(
        of(true)
      );
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
  

});
