export default function getRates() {
    console.log("in get rates")
    const API_KEY = 'access_key=5a1c2c9921bd564df0ec4470a9283691'
    return fetch('http://api.exchangeratesapi.io/v1/latest?base=EUR&symbols=ILS&' + API_KEY).then(response => response.json());
}
// https://api.exchangeratesapi.io/v1/latest
//     ? access_key = API_KEY
//     & base = USD
//     & symbols = GBP,JPY,EUR
