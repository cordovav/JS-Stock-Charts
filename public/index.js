//function used to define background and border color
function getColor(stock){
    if(stock === 'GME'){
        return 'rgba(61, 161, 61, 0.7)';
    }
    if(stock === 'MSFT'){
        return 'rgba(209, 4, 25, 0.7)';
    }
    if(stock === 'DIS'){
        return 'rgba(18, 4, 209, 0.7)';
    }
    if(stock === 'BNTX'){
        return 'rgba(166, 43, 158, 0.7)';
    }
}
function findHighest(values){
    let highest = 0;
    values.forEach(value =>{
        if(parseFloat(value.high) > highest){
            highest = parseFloat(value.high)
        }
    })
    return highest;
}

async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


//created fetch request for twelvedata documentation
    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=30min&apikey=3bd179df2df44c3a828326eaecc1e655`);
    const result = await response.json();
    //turned objects into an array
    
/*  let GME = result.GME;
    let MSFT = result.MSFT;
    let DIS = result.DIS;
    let BTNX = result.BNTX; 
*/

    const { GME, MSFT, DIS, BNTX } = result;
    //const { GME, MSFT, DIS, BTNX } = mockData;
    const stocks = [GME, MSFT, DIS, BNTX];
    //console.log(result)
    //console.log(mockData)

    stocks.forEach( stock => stock.values.reverse())


    //new time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            //defining labels for our chart
            labels: stocks[0].values.map(value => value.datetime),
            //defining new label, data, background and border color for chart
            datasets: stocks.map(stock => ({ 
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor: getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
        }))
        }
    });

    //highestPrice Bar Chart
    new Chart(highestPriceChartCanvas.getContext('2d'), {
        type: 'bar',
        data: {
            //defining labels for our bar chart
            labels: stocks.map(stock => stock.meta.symbol),
            //defining new label, data, background and border color for bar chart
            datasets: [{
                label: "Highest Price",
                data: stocks.map(stock =>(findHighest(stock.values))),
                backgroundColor: stocks.map(stock => (
                    getColor(stock.meta.symbol)
                )),
                borderColor:stocks.map(stock => (
                    getColor(stock.meta.symbol)
                )),
            }]
        }
    });

    
}


main()