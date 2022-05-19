
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';

describe('workspace-project plan', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cliente: ClientePage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cliente = new ClientePage();
    });

    it('Deberia crear cliente', () => {
        
        const DOCUMENT_TYPE = 'CC';
        const DOCUMENT_NUMBER = '105498751';
        const CLIENT_NAME = 'Pepito';
        const PHONE_NUMBER = '3154875925';
        const PLAN_ID = '1';
        const PLAN_VALUE = '20.000';
        const START_DATE = '2022-04-06 01:34:00';

        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonCrearClientes();
        cliente.ingresarDocumentType(DOCUMENT_TYPE);
        cliente.ingresarDocumentNumber(DOCUMENT_NUMBER);
        cliente.ingresarClientName(CLIENT_NAME);
        cliente.ingresarPhoneNumber(PHONE_NUMBER);
        cliente.ingresarPlanId(PLAN_ID);
        cliente.ingresarPlanValue(PLAN_VALUE);
        cliente.ingresarStartDate(START_DATE);

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar clientes', () => {
        page.navigateTo();
        navBar.clickBotonClientes();
        cliente.clickBotonListarClientes();

        expect(4).toBe(cliente.contarClientes());
    });


});
