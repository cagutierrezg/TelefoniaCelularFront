import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

    actualizarForm: FormGroup;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {

    this.actualizarForm = new FormGroup({
     
      id: new FormControl('', [Validators.required,]),
      planId: new FormControl('', [Validators.required,]),
      planValue: new FormControl('', [Validators.required,])});
      }


      actualizar() {
        this.clienteService.actualizar(this.actualizarForm.value).subscribe(
          response => {
            console.log(response);
          });;
      }
}