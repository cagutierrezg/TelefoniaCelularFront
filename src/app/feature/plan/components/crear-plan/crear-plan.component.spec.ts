import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CrearPlanComponent } from './crear-plan.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanService } from '../../shared/service/plan.service';
import { HttpService } from 'src/app/core/services/http.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('CrearPlanComponent', () => {
  let component: CrearPlanComponent;
  let fixture: ComponentFixture<CrearPlanComponent>;
  let planService: PlanService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlanComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PlanService, HttpService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanComponent);
    component = fixture.componentInstance;
    planService = TestBed.inject(PlanService);
    spyOn(planService, 'guardar').and.returnValue(
      of(5)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.planForm.valid).toBeFalsy();
  });

  it('Registrando plan', () => {
    expect(component.planForm.valid).toBeFalsy();
    component.planForm.controls.namePlan.setValue('plan Silver');
    component.planForm.controls.valuePlan.setValue('30.000');
    component.planForm.controls.specificationPlan.setValue('3 GB, 200 minutos, 100 sms');
    expect(component.planForm.valid).toBeTruthy();

    component.cerar();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
