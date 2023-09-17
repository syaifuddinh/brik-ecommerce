import GetService from "models/api/api"

class ProductService {
    baseUrl = process.env.REACT_APP_API_URL; 

    getUrl(param: string) {
        return  `${this.baseUrl}/${param}`;
    }

    async get() {
        const baseUrl = this.getUrl(`category`)
        const { data } = await GetService().get(baseUrl)
        return data;
    }
}

export default ProductService;