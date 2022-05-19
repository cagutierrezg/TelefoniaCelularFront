import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../shared/service/plan.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    selector: 'app-crear-plan',
    templateUrl: './crear-plan.component.html',
    styleUrls: ['./crear-plan.component.css']
  })
  export class CrearPlanComponent implements OnInit {
    planForm: FormGroup;
    constructor(protected planServices: PlanService) { }
  
    ngOnInit() {
      this.construirFormularioPlan();
      
    }
  
    
    cerar() {
      this.planServices.guardar(this.planForm.value).subscribe(
        response => {
          console.log(response);
        });
    }
  
    private construirFormularioPlan() {
      this.planForm = new FormGroup({
        namePlan: new FormControl('', [Validators.required]),
        valuePlan: new FormControl('', [Validators.required]),
      specificationPlan: new FormControl('', [Validators.required]),
      });
    }
  
  }
  