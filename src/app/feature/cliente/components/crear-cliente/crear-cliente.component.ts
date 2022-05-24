import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
const LONGITUD_MINIMA_PERMITIDA_TEXTO = 10;
const LONGITUD_MAXIMA_PERMITIDA_TEXTO = 10;

@Component({
    selector: 'app-crear-cliente',
    templateUrl: './crear-cliente.component.html',
    styleUrls: ['./crear-cliente.component.css']
  })
  export class CrearClienteComponent implements OnInit {
    clienteForm: FormGroup;
    idcliente;
    constructor(protected clienteServices: ClienteService,  private router: Router) { }
  
    ngOnInit() {
      this.construirFormularioCliente();
      
    }
  
    
    cerar() {
      
      this.clienteServices.guardar(this.clienteForm.value).subscribe(
         () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario creado correctamente',
            showConfirmButton: true
            
          })
          this.router.navigate(['/cliente/consultar']);
        },
          error => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error.error.mensaje,
              showConfirmButton: true
              
            });

            this.clienteForm.reset();
          
            }

          );
        
        };
      
    
  
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
  