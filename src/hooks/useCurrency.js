import { useState, useEffectuseCurrency.js } from "react";

const useCurrencyRate = (currency) => {
  const [currencyRate, setRate] = useState([]);
  useEffect(() => {
    fetch(`http://www.floatrates.com/daily/usd.json`)
      .then((res) => res.json())
      .then((result) => setRate(result));
  }, [currency]);

  return currencyRate;
};

export default useCurrencyRate;
