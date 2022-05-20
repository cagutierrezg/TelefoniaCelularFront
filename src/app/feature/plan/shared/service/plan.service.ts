import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Plan } from '../model/plan';


@Injectable()
export class PlanService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Plan[]>(`${environment.endpoint}/planes/0`, this.http.optsName('consultar planes'));
  }

  public guardar(plan: Plan) {
    return this.http.doPost<Plan>(`${environment.endpoint}/planes`, plan,
                                                this.http.optsName('crear planes'));
                                                console.log
  }

}