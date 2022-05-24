import { by, element } from 'protractor';

export class PlanPage {
    private linkCrearPlan = element(by.id('linkCrearPlan'));
    private linkListarPlan = element(by.id('linkListarPlan'));
    private inputNamePlan = element(by.id('namePlan'));
    private inputValuePlan = element(by.id('valuePlan'));
    private inputSpecificationPlan = element(by.id('specificationPlan'));
    private listaPlan = element.all(by.css('tr '));
    private buttonCrearPlan = element(by.id('buttonCrearPlan'));

    async clickBotonCrearPlanes() {
        await this.linkCrearPlan.click();
    }

    async clickBotonListarPlanes() {
        await this.linkListarPlan.click();
    }

    async clickBotonCrear() {
        await this.buttonCrearPlan.click();
    }


    async ingresarNamePlan(namePlan) {
        await this.inputNamePlan.sendKeys(namePlan);
    }

    async ingresarValuePlan(valuePlan) {
        await this.inputValuePlan.sendKeys(valuePlan);
    }

    async ingresarSpecificationPlan(specificationPlan) {
        await this.inputSpecificationPlan.sendKeys(specificationPlan);
    }

    async contarPlanes() {
        return this.listaPlan.count();
    }
}
