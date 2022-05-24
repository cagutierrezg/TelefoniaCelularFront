export class Plan {
    id: number;
    namePlan: string;
    valuePlan: string;
    specificationPlan: string;


    constructor(id: number, namePlan: string, valuePlan: string, specificationPlan: string) {
        this.id = id;
        this.namePlan = namePlan;
        this.valuePlan = valuePlan;
        this.specificationPlan = specificationPlan;
    }
}
