async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


//created fetch request for twelvedata documentation
    const response = await fetch(`https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=3bd179df2df44c3a828326eaecc1e655`);
    const result = await response.json();
    //turned objects into an array
    let GME = result.GME;
    let MSFT = result.MSFT;
    let DIS = result.DIS;
    let BTNX = result.BTNX;

    const stocks = [GME, MSFT, DIS, BTNX];
    console.log(result)

}

main()