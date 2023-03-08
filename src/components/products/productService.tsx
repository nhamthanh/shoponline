import { SERVER } from "../common/constants";

export async function get_products(){
    let products = await fetch(SERVER + "/products").then(res => res.json());
    return products;
}