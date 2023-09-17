import { Product } from "interfaces/product";

class FormConstructor {
    payload: Product = {
        title: "",
        sku: "",
        description: "",
        categoryId: "",
        price: 0,
        weight: 0,
        length: 0,
        width: 0,
        thumbnail: undefined,
        height: 0
    };

    reset() {
        this.payload = {
            title: "",
            sku: "",
            description: "",
            categoryId: "",
            price: 0,
            weight: 0,
            length: 0,
            width: 0,
            thumbnail: undefined,
            height: 0      
        }
    }

    setTitle(value: string) {
        this.payload.title = value;
    }

    setCategoryId(value: string) {
        this.payload.categoryId = value;
    }

    setSku(value: string) {
        this.payload.sku = value;
    }

    setDescription(value: string) {
        this.payload.description = value;
    }

    setPrice(value: number) {
        this.payload.price = value;
    }

    setWeight(value: number) {
        this.payload.weight = value;
    }

    setLength(value: number) {
        this.payload.length = value;
    }

    setWidth(value: number) {
        this.payload.width = value;
    }

    setHeight(value: number) {
        this.payload.height = value;
    }

    setThumbnail(file: typeof File) {
        this.payload.thumbnail = file;
    }

}

export default new FormConstructor();