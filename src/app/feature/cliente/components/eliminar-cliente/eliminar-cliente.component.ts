import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/service/cliente.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

    eliminarForm: FormGroup;

  constructor(protected clienteService: ClienteService) { }

  ngOnInit() {

    this.eliminarForm = new FormGroup({
     
      id: new FormControl('', [Validators.required,])});
      }


      eliminar() {
        this.clienteService.eliminar(this.eliminarForm.value).subscribe(
          response => {
            console.log(response);
          });;
      }

    
}
