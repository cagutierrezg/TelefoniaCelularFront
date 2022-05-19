import { NgModule } from '@angular/core';

import { PlanRoutingModule } from './plan-routing.module';
import { ListarPlanComponent } from './components/listar-plan/listar-plan.component';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { PlanComponent } from './components/plan/plan.component';
import { SharedModule } from '@shared/shared.module';
import { PlanService } from './shared/service/plan.service';


@NgModule({
  declarations: [
    CrearPlanComponent,
    ListarPlanComponent,
    PlanComponent
  ],
  imports: [
    PlanRoutingModule,
    SharedModule
  ],
  providers: [PlanService]
})
export class PlanModule { }
