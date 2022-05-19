import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Plan } from '@plan/shared/model/plan';

import { PlanService } from '@plan/shared/service/plan.service';
@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {
  public listaPlan: Observable<Plan[]>;
  Cabeceras: string[] = [
    'Plan Id',
    'Nombre Plan',
    'Valor Plan',
    'Especificaciones'
  ];

  constructor(protected planService: PlanService) { }

  ngOnInit() {
    this.listaPlan = this.planService.consultar();
    
  }

}
