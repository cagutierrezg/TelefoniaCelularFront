import { NgModule } from '@angular/core';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarClienteComponent } from './components/consultar-cliente/consultar-cliente.component';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { SharedModule } from '@shared/shared.module';
import { ClienteService } from './shared/service/cliente.service';
import { ClienteComponent } from './components/cliente/cliente.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    ConsultarClienteComponent,
    EliminarClienteComponent,
    ActualizarClienteComponent,
    ClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    SharedModule
  ],
  providers: [ClienteService]
})
export class ClienteModule { }
