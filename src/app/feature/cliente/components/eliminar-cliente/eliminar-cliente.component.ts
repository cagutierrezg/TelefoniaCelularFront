import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  eliminarForm: FormGroup;

  constructor(protected clienteService: ClienteService,  private router: Router)  { }

  ngOnInit() {

    this.eliminarForm = new FormGroup({
     
      id: new FormControl('', [Validators.required,])});
      }


      eliminar() {
        this.clienteService.eliminar(this.eliminarForm.value).subscribe(
          () => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Usuario eliminado correctamente',
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
              this.eliminarForm.reset();
            
              });
      }

    
}
