import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarPlanComponent } from './listar-plan.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PlanService } from '../../shared/service/plan.service';
import { Plan } from '../../shared/model/plan';
import { HttpService } from 'src/app/core/services/http.service';

describe('ListarPlanComponent', () => {
  let component: ListarPlanComponent;
  let fixture: ComponentFixture<ListarPlanComponent>;
  let planService: PlanService;
  const listaPlan: Plan[] = [new Plan(1, 'plan gold', '30.000', '2 GB, 200 min, 300 SMS'), new Plan(2, 'plan super gold', '50.000', '2 GB, 200 min, 300 SMS')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPlanComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [PlanService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlanComponent);
    component = fixture.componentInstance;
    planService = TestBed.inject(PlanService);
    spyOn(planService, 'consultar').and.returnValue(
      of(listaPlan)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPlan.subscribe(resultado => {
      expect(2).toBe(resultado.length);
  });
});

});
