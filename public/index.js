async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');


//created fetch request for twelvedata documentation
  //  const response = await fetch(`https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1day&apikey=3bd179df2df44c3a828326eaecc1e655`);
   // const result = await response.json();
    //turned objects into an array
    
/*  let GME = result.GME;
    let MSFT = result.MSFT;
    let DIS = result.DIS;
    let BTNX = result.BTNX; 
*/

    //const { GME, MSFT, DIS, BNTX } = result;
    const { GME, MSFT, DIS, BTNX } = mockData;
    const stocks = [GME, MSFT, DIS, BTNX];
    console.log(mockData)


    //new time Chart
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            //defining labels for our chart
            //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: stocks[0].values.map(value => value.dateTime),
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        }
    });
    
}
//console.log(stocks[0].values)
main()