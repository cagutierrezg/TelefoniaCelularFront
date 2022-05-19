import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { ClienteComponent } from './components/cliente/cliente.component';


const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: 'crear',
        component: CrearClienteComponent
      },
      {
        path: 'consultar',
        component: ConsultarClienteComponent
      },
      {
        path: 'eliminar',
        component: EliminarClienteComponent
      },
      {
        path: 'actualizar',
        component: ActualizarClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
