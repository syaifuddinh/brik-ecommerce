import { Product } from "interfaces/product";
import StoringProduct from "models/product/product.store"
import { showMessage } from "utils/notification";
import { showErrorMessage } from "utils/notification";

class CreatingProductConstructor {    
    payload: Product = <Product> {};

    getDisability = () => {
        const payload = this.payload;
        return !payload.title || !payload.sku || !payload.categoryId || !payload.price || !payload.thumbnail;
    }

    setPayload(payload: Product) {
        console.log({ payload })
        this.payload = payload;
    }

 
    async store(callback: () => void, finishedCallback: () => void) {
        console.log({ storepayload: this.payload })
        try {   
            await StoringProduct.store(this.payload);
            showMessage("Product created sucessfully");
            callback();
        } catch(e) {
            showErrorMessage(e as string);
        }
        finishedCallback()
    }    

}

export default new CreatingProductConstructor();