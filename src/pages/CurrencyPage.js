import { useState, useEffect, useMemo } from "react";

import useExchangeService from "../services/ExchangeService";

import CurrencyList from '../components/currencyList/CurrencyList';
import Spinner from '../components/spinner/Spinner';
import ErrorMessage from '../components/errorMessage/ErrorMessage';

const setContent = (process, Component) => {
    switch (process) {
        case 'waiting':
            return <Spinner/>
        case 'loading':
            return <Spinner/>
        case 'confirmed':
            return <Component/>
        case 'error':
            return <ErrorMessage/>
        default:
            throw new Error('Unexpected process state')
    }
}

const CurrencyPage = () => {

    const [currencyList, setCurrencyList] = useState([]);

    const {getCurrencies, process, setProcess} = useExchangeService();

    useEffect(() => {
        onRequest();
    // eslint-disable-next-line
    }, []);

    const onRequest = () => {
        getCurrencies()
            .then(onCurrencyLoaded)
            .then(() => setProcess('confirmed'))
    }

    const onCurrencyLoaded = (currencyList) => {
        setCurrencyList(currencyList);
    }

    const renderItems = (arr) => {
        const elems = arr.map(({ID, ...props}) => {
            return (
                <CurrencyList key={ID} {...props}/>
            )
        });
        return (
            <div>
                {elems}
            </div>
        )
    }

    const elements = useMemo(() => {
        return setContent(process, () => renderItems(currencyList));
    // eslint-disable-next-line
    }, [process]);

    return (
        <div>
            {elements}
        </div>
    );
};

export default CurrencyPage;