import  { IInvoice } from "./common/IInvoice";

export class InvoiceProvider {
    private data : IInvoice[] = [];

    constructor(init?: IInvoice[]) {
        if(init) {
            this.data = init;
        }
    }

    public addInvoice(item : IInvoice) {
        this.data.push(item);
    }

    public updateInvoice(item: IInvoice) {
        //
    }

    public getInvoices() : IInvoice[] {
        return this.data;
    }
}