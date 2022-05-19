import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlanService } from './plan.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Plan } from '../model/plan';
import { HttpResponse } from '@angular/common/http';

describe('PlanesService', () => {
  let httpMock: HttpTestingController;
  let service: PlanService;
  const apiEndpointPlanesConsulta = `${environment.endpoint}/planes/0`;
  const apiEndpointPlanes = `${environment.endpoint}/planes/create`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlanService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PlanService);
  });

  it('should be created', () => {
    const planService: PlanService = TestBed.inject(PlanService);
    expect(planService).toBeTruthy();
  });

  it('deberia listar planes', () => {
    const dummyPlanes = [
      new Plan(1, 'plan gold2', '30.000', '2 GB, 200 min, 300 SMS'), new Plan(2, 'plan super gold2', '50.000', '2 GB, 200 min, 300 SMS')
    ];
    service.consultar().subscribe(planes => {
      expect(planes.length).toBe(2);
      expect(planes).toEqual(dummyPlanes);
    });
    const req = httpMock.expectOne(apiEndpointPlanesConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPlanes);
  });

  it('deberia crear un plan', () => {
    const dummyPlan = new Plan(1, 'plan gold2', '30.000', '2 GB, 200 min, 300 SMS');
    service.guardar(dummyPlan).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPlanes);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  
});
