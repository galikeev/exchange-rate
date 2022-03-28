import { useHttp } from "../hooks/http.hook";

const useExchangeService = () => {
    const {request, clearError, process, setProcess} = useHttp();

    const _baseApi = 'https://www.cbr-xml-daily.ru/daily_json.js';

    const getCurrencies = async () => {
        const res = await request(`${_baseApi}`);
        const arrayOfObj = Object.values(res.Valute);
        return arrayOfObj;
    }

    return {
        clearError,
        process,
        setProcess,
        getCurrencies
    }
}

export default useExchangeService;