export declare class PlansService {
    constructor();
    create(createPlanDto: any): any;
    findAll(): any;
    findOne(id: string): any;
    findOneByStripeId(stripeId: string): any;
    update(id: string, updateData: any): any;
    remove(id: string): any;
}
