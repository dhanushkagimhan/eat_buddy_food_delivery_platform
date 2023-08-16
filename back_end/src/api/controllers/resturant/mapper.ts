import { ResturantOutput, ResturantResponse } from "../../../common/interfaces";

export default function toResturant(newResturant: ResturantOutput): ResturantResponse {
    return {
        id: newResturant.id,
        name: newResturant.name,
        address: newResturant.address,
        phone_number: newResturant.phone_number,
        created_at: newResturant.createdAt,
        updated_at: newResturant.updatedAt
    }
}