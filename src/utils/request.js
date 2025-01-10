import axios from 'axios';

const apiF8 = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api',
});
const apiTiktok = axios.create({
    baseURL: 'https://www.tiktok.com/api',
});

const get = async (typeApi, url, options = {}) => {
    let api = apiF8;
    switch (typeApi) {
        case 'f8':
            api = apiF8;
            break;
        case 'tiktok':
            api = apiTiktok;
            break;
        default:
            break;
    }

    try {
        const response = await api.get(url, options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export { get };
