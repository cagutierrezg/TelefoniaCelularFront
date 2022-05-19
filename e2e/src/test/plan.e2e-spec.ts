import { browser, logging } from 'protractor';
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PlanPage } from '../page/plan/plan.po';

describe('workspace-project Plan', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let plan: PlanPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        plan = new PlanPage();
    });

    it('Deberia crear plan', () => {
        const NAME_PLAN = 'plan Silver';
        const VALUE_PLAN = '50.000';
        const SPECIFICATION_PLAN = '3 GB, 200 MIN, 300 SMS';

        page.navigateTo();
        navBar.clickBotonPlanes();
        plan.clickBotonCrearPlanes();
        plan.ingresarNamePlan(NAME_PLAN);
        plan.ingresarValuePlan(VALUE_PLAN);
        plan.ingresarSpecificationPlan(SPECIFICATION_PLAN);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar planes', () => {
        page.navigateTo();
        navBar.clickBotonPlanes();
        plan.clickBotonListarPlanes();

        expect(4).toBe(plan.contarPlanes());
    });
});
