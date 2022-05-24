import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../shared/service/plan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-crear-plan',
    templateUrl: './crear-plan.component.html',
    styleUrls: ['./crear-plan.component.css']
  })
  export class CrearPlanComponent implements OnInit {
    planForm: FormGroup;
    idplan;
    constructor(protected planServices: PlanService, private router: Router) { }
  
    ngOnInit() {
      this.construirFormularioPlan();
      
    }
  

    
    cerar() {

      if (this.planForm.valid) {
      
        this.planServices.guardar(this.planForm.value).subscribe(
          ()  => {

            
            this.router.navigate(['/plan/listar']);},
            error => {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: error.error.mensaje,
                showConfirmButton: true
                
              });
              this.planForm.reset();
  
          });
      
      }


    }
  
    private construirFormularioPlan() {
      this.planForm = new FormGroup({
        namePlan: new FormControl('', [Validators.required]),
        valuePlan: new FormControl('', [Validators.required]),
      specificationPlan: new FormControl('', [Validators.required]),
      });
    }
  
  }
  