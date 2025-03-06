export default interface IProductVariant {
    id: number;
    product_id: number;
    size: string;
    color: string;
    price: number;
    stock_quantity: number;
    sku: string;
    image_url?: string; 
}