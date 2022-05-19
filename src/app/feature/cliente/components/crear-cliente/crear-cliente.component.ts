import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 10;

@Component({
    selector: 'app-crear-cliente',
    templateUrl: './crear-cliente.component.html',
    styleUrls: ['./crear-cliente.component.css']
  })
  export class CrearClienteComponent implements OnInit {
    clienteForm: FormGroup;
    constructor(protected clienteServices: ClienteService) { }
  
    ngOnInit() {
      this.construirFormularioCliente();
      
    }
  
    
    cerar() {
      console.log(this.clienteForm.value)
      this.clienteServices.guardar(this.clienteForm.value).subscribe(
        response => {
          console.log(this.clienteForm.value)
          console.log(response);
          
        });
    }
  
    private construirFormularioCliente() {
      
      this.clienteForm = new FormGroup({
        
        documentType: new FormControl('', [Validators.required]),
        documentNumber: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
                                                                Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]),
        clientName: new FormControl('', [Validators.required]),
        phoneNumber: new FormControl('', [Validators.required, Validators.minLength(LONGITUD_MINIMA_PERMITIDA_TEXTO),
            Validators.maxLength(LONGITUD_MAXIMA_PERMITIDA_TEXTO)]), 
        planId: new FormControl('', [Validators.required]),
        planValue: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required])

      });
    }
  
  }
  