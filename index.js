import { getStockData } from './fakeStockAPI.js';

setInterval(function () {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1500);

let prevPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById('name');
  const stockDisplaySymbol = document.getElementById('symbol');
  const stockDisplayPrice = document.getElementById('price');
  const stockDisplayPriceIcon = document.getElementById('price-icon');
  const stockDisplayTime = document.getElementById('time');

  const { name, sym, price, time } = stockData;
  const priceDirectionIcon =
    price > prevPrice
      ? 'drop-up.svg'
      : price < prevPrice
        ? 'drop-down.svg'
        : 'right.svg';

  const priceColor =
    price > prevPrice ? '#04bd04' : price < prevPrice ? '#ff0000' : '#808080';

  const priceIconElement = document.createElement('img');
  priceIconElement.src = `svg/${priceDirectionIcon}`;
  priceIconElement.alt = 'Price direction icon';
  stockDisplayPriceIcon.innerHTML = '';
  stockDisplayPriceIcon.appendChild(priceIconElement);

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerText = price;
  stockDisplayPrice.style.color = priceColor;
  stockDisplayTime.innerText = time;
  prevPrice = price;
}
