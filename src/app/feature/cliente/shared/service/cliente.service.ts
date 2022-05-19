import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';


@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) {}

  public consultar(cliente: Cliente) {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes/${cliente.documentNumber}/${cliente.phoneNumber}`, this.http.optsName('consultar cliente'));
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente>(`${environment.endpoint}/clientes/create`, cliente,
                                                this.http.optsName('crear clientes'));
                                                console.log
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${cliente.id}`,
                                                 this.http.optsName('eliminar cliente'));
  }

  public actualizar(cliente: Cliente) {
    return this.http.doPut<Cliente,boolean>(`${environment.endpoint}/clientes/update`, cliente,
                                                 this.http.optsName('actualizar productos'));
  }

}