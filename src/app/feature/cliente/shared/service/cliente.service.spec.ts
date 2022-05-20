import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ClienteService } from './cliente.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Cliente } from '../model/cliente';
import { HttpResponse } from '@angular/common/http';

describe('ClienteService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointClientesConsulta = `${environment.endpoint}/clientes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const clienteService: ClienteService = TestBed.inject(ClienteService);
    expect(clienteService).toBeTruthy();
  });

  it('deberia listar Cliente', () => {
    const dummyClientes = [
      new Cliente(1, 'CC', '1373828423', 'PEPITO', '3172834132', '1','20.000', 42)
    ];

    const consulta = new Cliente(1, 'CC', '1373828423', 'PEPITO', '3172834132', '1','20.000', 42);
    service.consultar(consulta).subscribe(clientes => {
      expect(clientes).toEqual(dummyClientes);
    });
    const req = httpMock.expectOne(`${apiEndpointClientesConsulta}/1373828423/3172834132`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyClientes);
  });

  it('deberia crear un cliente', () => {
    const dummyCliente = new Cliente(1, 'CC', '1373828423', 'PEPITO', '3172834132', '1','20.000', 42);
    service.guardar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointClientesConsulta}`);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });
  
  
  it('deberia eliminar un producto', () => {
    const dummyProducto = new Cliente(1, 'CC', '1373828423', 'PEPITO', '3172834132', '1','20.000', 42);
    service.eliminar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointClientesConsulta}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia acualizar un cliente', () => {
    const dummyCliente = new Cliente(1, 'CC', '1373828423', 'PEPITO', '3172834132', '1','20.000', 42);
    service.actualizar(dummyCliente).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointClientesConsulta}`);
    expect(req.request.method).toBe('PUT');
    req.event(new HttpResponse<boolean>({body: true}));

  });
});
