import { by, element } from 'protractor';

export class PlanPage {
    private linkCrearPlan = element(by.id('linkCrearPlan'));
    private linkListarPlan = element(by.id('linkListarPlan'));
    private inputNamePlan = element(by.id('planName'));
    private inputValuePlan = element(by.id('planValue'));
    private inputSpecificationPlan = element(by.id('specificationPlan'));
    private listaPlan = element.all(by.css('ul.planes li'));

    async clickBotonCrearPlanes() {
        await this.linkCrearPlan.click();
    }

    async clickBotonListarPlanes() {
        await this.linkListarPlan.click();
    }

    async ingresarNamePlan(planName) {
        await this.inputNamePlan.sendKeys(planName);
    }

    async ingresarValuePlan(planValue) {
        await this.inputValuePlan.sendKeys(planValue);
    }

    async ingresarSpecificationPlan(specificationPlan) {
        await this.inputSpecificationPlan.sendKeys(specificationPlan);
    }

    async contarPlanes() {
        return this.listaPlan.count();
    }
}
