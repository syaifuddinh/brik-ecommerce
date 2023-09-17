import ProductService from "services/ProductService";
import { formatMoney } from "utils/string";

class Constructor {
    list: any[] = [];
    payload = {
        start: 0,
        limit: 10,
        keyword: ""
    }
    meta = {
        length: 1,
        page: 1
    };

    service: any = null;

    constructor() {
        this.service = new ProductService();
    }

    setPagination(page: number) {
        this.meta.page = page;
        this.payload.start = (page - 1) * this.payload.limit;
    }

    setKeyword(keyword: string) {
        this.payload.keyword = keyword;
    }

    setPayload(newVal: typeof this.payload) {
        this.payload = newVal;
    }

    async get() {
        try {
            const { data } = await this.service.get(this.payload.start, this.payload.limit, this.payload.keyword);
            const { list, meta } = data;
            this.setList(list);
            this.meta.length = meta.length;
        } catch(e) {
            // console.log(e);
        }
    }

    setList(list: any[]) {
        this.list = list.map((item: any) => {
            const price = "Rp " + formatMoney(item.price)
            return {...item, price}
        });
    }
}

export default new Constructor();

