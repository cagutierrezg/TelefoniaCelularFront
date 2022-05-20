import { by, element } from 'protractor';

export class NavbarPage {
    linkPlan = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkCliente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));


    async clickBotonPlanes() {
        await this.linkPlan.click();
    }
    
    async clickBotonClientes() {
        await this.linkCliente.click();
    }

}
