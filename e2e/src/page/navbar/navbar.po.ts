import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkPlan = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCliente = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));


    async clickBotonPlanes() {
        await this.linkPlan.click();
    }
    
    async clickBotonClientes() {
        await this.linkCliente.click();
    }

}
