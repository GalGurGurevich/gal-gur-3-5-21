export default function getRates() {
    return fetch('https://api.exchangeratesapi.io/latest?base=USD').then(response => response.json());
}
