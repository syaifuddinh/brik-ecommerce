import { Product } from "interfaces/product";
import ProductService from "services/ProductService"

export default new class StoringProduct {

    async store(payload: Product) {
        const service = new ProductService();
        const params = new FormData();
        params.append("title", payload.title);
        params.append("sku", payload.sku);
        params.append("categoryId", payload.categoryId);
        params.append("description", payload.description as string);
        params.append("price", payload.price.toString());
        params.append("weight", payload.weight.toString());
        params.append("length", payload.length.toString());
        params.append("width", payload.width.toString());
        params.append("height", payload.height.toString());
        params.append("thumbnail", payload.thumbnail as any);
        const { status, message } = await service.store(params);
        if(status !== 200) throw message;
    }
}