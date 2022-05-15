export interface ITransactionModel {
    user_id: string;
    id?: number;
    title: string;
    type: string;
    date: Date;
    frequency: string;
    value: number;
    description?: string;
}