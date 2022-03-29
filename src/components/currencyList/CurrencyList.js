import './currencyList.scss';

const CurrencyList = ({NumCode, CharCode, Nominal, Name, Value, Previous}) => {

    let percent = (100 * (Previous - Value) / Value).toFixed(2);
    const colorPercent = percent > 0 ? {'color': 'green'} : {'color': 'red'};

    return (
        <div className='currency__wrapper'>
            <div className='currency__item'>{CharCode}</div>
            <div className='currency__item'>{Value.toFixed(2)} руб</div>
            <div className='currency__item'>{Previous.toFixed(2)} руб</div>
            <div className='currency__item' style={colorPercent}>{percent}%</div>
        </div>
    );
};

export default CurrencyList;