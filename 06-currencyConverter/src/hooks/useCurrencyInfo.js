import {useState, useEffect} from 'react';

// custom hooks--> making your own hook
function useCurrencyInfo(currency){
    const [info, setInfo] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
           .then((res) => res.json())
           .then((res) => setInfo(res[currency]))
    }, [currency])

    return info;
}

export default useCurrencyInfo;