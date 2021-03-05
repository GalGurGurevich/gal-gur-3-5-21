export default function getRates() {
    return fetch("https://api.exchangeratesapi.io/latest?base=USD", {
      "Content-Type": "application/json"
    }).then((response) => response.json());
  }
