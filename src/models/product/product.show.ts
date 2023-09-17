import { ShowingProductViewType } from "interfaces/product";
import ProductService from "services/ProductService"
import { formatMoney } from "utils/string";

export default new class ShowingProduct {
    payload: ShowingProductViewType = <ShowingProductViewType> {};

    async get(id: string) {
        const service = new ProductService();
        const { data } = await service.show(id);
        console.log(data)
        this.payload.title = data.title;
        this.payload.sku = data.sku;
        this.payload.categoryId = data.categoryId;
        this.payload.categoryName = data.categoryname;
        this.payload.description = data.description;
        this.payload.price = data.price;
        this.payload.weight = data.weight;
        this.payload.length = data.length;
        this.payload.width = data.width;
        this.payload.height = data.height;
        this.payload.thumbnail = data.thumbnail;
    }

    getParsedPayload() {
        const outp = {...this.payload} as any;
        outp.price = "Rp " + formatMoney(outp.price);
        outp.description = outp.description ? outp.description : "-";

        return outp;
    }
}