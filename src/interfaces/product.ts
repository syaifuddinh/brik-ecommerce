export type BaseProduct = {
    title: string;
    sku: string;
    categoryId: string;
    description?: string;
    price: number;
    weight: number;
    length: number;
    width: number;
    height: number;
}

export type Product = {
    thumbnail?: typeof File;
} & BaseProduct;

export type ShowingProductViewType = {
    thumbnail: string;
    categoryName: string;
} & BaseProduct;