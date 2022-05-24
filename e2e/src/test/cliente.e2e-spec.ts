
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { ClientePage } from '../page/cliente/cliente.po';
import Swal from 'sweetalert2';
describe('workspace-project Cliente', () => {
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
        const DOCUMENT_NUMBER = '1054987587';
        const CLIENT_NAME = 'Pepito';
        const PHONE_NUMBER = '3154875943';
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

        cliente.clickBotonRegistrar();

        setTimeout(() => {
            expect(Swal.getTitle().textContent).toEqual('Usuario creado correctamente');
            Swal.clickConfirm();
          });

        

    });

   


});
