export const formatMoney: (data: string) => string = (data: string) => {
    if(!data) return "0";
    const parts = data.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};