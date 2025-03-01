async function convertCurrency() {
  let amount = document.getElementById('amount').value;
  let fromCurrency = document.getElementById('fromCurrency').value;
  let toCurrency = document.getElementById('toCurrency').value;
  
  if (amount === "" || amount <= 0) {
      alert("Please enter a valid amount");
      return;
  }
  
  let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data.rates[toCurrency];
  let convertedAmount = (amount * rate).toFixed(2);
  
  document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
}