



function StockHandler() {
  
  this.getStockPrice = function (data) {
    let stockData = data[Object.keys(data)[Object.keys(data).length - 1]];
    let lastDay = stockData[Object.keys(stockData)[Object.keys(stockData).length - 1]];
    let price = lastDay['4. close'];
    return price;
  }

}

module.exports = StockHandler;