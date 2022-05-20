import { by, element } from 'protractor';

export class ClientePage {
    private linkCrearCliente = element(by.id('linkCrearCliente'));
    private linkConsultarCliente = element(by.id('linkConsultarCliente'));
    private inputId = element(by.id('id'));
    private inputDocumentType = element(by.id('documentType'));
    private inputDocumentNumber = element(by.id('documentNumber'));
    private inputClientName = element(by.id('clientName'));
    private inputPhoneNumber = element(by.id('phoneNumber'));
    private inputPlanId = element(by.id('planId'));
    private inputPlanValue = element(by.id('planValue'));
    private inputStartDate = element(by.id('startDate'));
    private buttonRegistrar = element(by.id('registrar'))
    private listaClientes = element.all(by.css('ul.clientes li'));

    async clickBotonCrearClientes() {
        await this.linkCrearCliente.click();
    }

    async clickBotonConsultarClientes() {
        await this.linkConsultarCliente.click();
    }

    async clickBotonRegistrar() {
        await this.buttonRegistrar.click();
    }

    async ingresarId(id) {
        await this.inputId.sendKeys(id);
    }

    async ingresarDocumentType(documentType) {
        await this.inputDocumentType.sendKeys(documentType);
    }

    async ingresarDocumentNumber(documentNumber) {
        await this.inputDocumentNumber.sendKeys(documentNumber);
    }

    async ingresarClientName(clientName) {
        await this.inputClientName.sendKeys(clientName);
    }

    async ingresarPhoneNumber(phoneNumber) {
        await this.inputPhoneNumber.sendKeys(phoneNumber);
    }

    async ingresarPlanId(planId) {
        await this.inputPlanId.sendKeys(planId);
    }

    async ingresarPlanValue(planValue) {
        await this.inputPlanValue.sendKeys(planValue);
    }

    async ingresarStartDate(startDate) {
        await this.inputStartDate.sendKeys(startDate);
    }
    async contarClientes() {
        return this.listaClientes.count();
    }
}
