export default function getRates() {
    console.log("in get rates")
    const API_KEY = 'access_key=431c5799b6e481816f75414ba2556aa1'
    return fetch('http://api.exchangeratesapi.io/v1/latest?base=EUR&symbols=ILS&' + API_KEY).then(response => response.json());
}
// https://api.exchangeratesapi.io/v1/latest
//     ? access_key = API_KEY
//     & base = USD
//     & symbols = GBP,JPY,EUR
