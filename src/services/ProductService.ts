import GetService from "models/api/api"

class ProductService {
    baseUrl = process.env.REACT_APP_API_URL; 

    getUrl(param: string) {
        return  `${this.baseUrl}/${param}`;
    }

    async get(start: number, limit: number, keyword: string) {
        const baseUrl = this.getUrl(`product?start=${start}&limit=${limit}&keyword=${keyword}`)
        const { data } = await GetService().get(baseUrl)
        return data;
    }

    async show(id: string) {
        const baseUrl = this.getUrl(`product/${id}`)
        const { data } = await GetService().get(baseUrl)
        return data;
    }

    async store(payload: FormData) {
        const baseUrl = this.getUrl(`product`)
        const { data } = await GetService().post(baseUrl, payload)
        return data;
    }
}

export default ProductService;