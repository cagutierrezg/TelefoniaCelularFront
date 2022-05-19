export class Cliente {
    id: number;
    documentType: string;
    documentNumber: string;
    clientName: string;
    phoneNumber: string;
    namePlan: string;
    valuePlan: string;
    time: number;



    constructor(id: number, documentType: string, documentNumber: string, clientName: string,
         phoneNumber: string, namePlan: string, valuePlan: string, time: number) {
        this.id = id;
        this.documentType = documentType;
        this.documentNumber = documentNumber;
        this.clientName = clientName;
        this.phoneNumber = phoneNumber;
        this.namePlan = namePlan;
        this.valuePlan = valuePlan;
        this.time = time;
    }
}
