export interface ExpenseEntry {

    id : number;
    item : string;
    amount : number;
    quantity : number;
    category : string;
    location : string;
    spendOn : Date;
    createdOn : Date;
}