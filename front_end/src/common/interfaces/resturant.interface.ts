export interface ResturantInterface {
    id: number;
    name: string;
    address: string;
    phone_number: string;
    created_at: Date;
    updated_at: Date;
    deleted_at?: Date;
}