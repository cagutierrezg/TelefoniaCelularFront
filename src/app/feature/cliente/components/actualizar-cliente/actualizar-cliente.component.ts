import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

    actualizarForm: FormGroup;

  constructor(protected clienteService: ClienteService,  private router: Router) { }

  ngOnInit() {

    this.actualizarForm = new FormGroup({
     
      id: new FormControl('', [Validators.required,]),
      planId: new FormControl('', [Validators.required,]),
      planValue: new FormControl('', [Validators.required,])});
      }


      actualizar() {
        this.clienteService.actualizar(this.actualizarForm.value).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Usuario actualizado correctamente',
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
  
              this.actualizarForm.reset();
            
              });
      }
}