import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPlanComponent } from './components/crear-plan/crear-plan.component';
import { ListarPlanComponent } from './components/listar-plan/listar-plan.component';
import { PlanComponent } from './components/plan/plan.component';



const routes: Routes = [
  {
    path: '',
    component: PlanComponent,
    children: [
      {
        path: 'crear',
        component: CrearPlanComponent
      },
      {
        path: 'listar',
        component: ListarPlanComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
