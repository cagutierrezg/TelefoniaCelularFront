import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup,  FormControl, Validators} from '@angular/forms';

import { Cliente } from '@cliente/shared/model/cliente';

import { ClienteService } from '@cliente/shared/service/cliente.service';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 10;

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {
  consultaForm: FormGroup;
  public listaCliente: Observable<Cliente[]>;

  Cabeceras: string[] = [
    'Id',
    'Tipo de Documento',
    'Número de documento',
    'Nombre de Cliente',
    'Número de telefono',
    'Id de plan',
    'Valor del plan',
    'Dias de antiguedad',
  ];
  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {

    this.consultaForm = new FormGroup({
     
      documentNumber: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                              Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
          Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)])});
      }


      consultar() {
        this.listaCliente = this.clienteService.consultar(this.consultaForm.value);
      }

    
  


}