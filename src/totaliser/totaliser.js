import _ from 'lodash';

export function getSum(transaction, type) {
    let sum = _(transaction)
                .groupBy("type")
                .map((objs, key) => {
                    if(!type) return _.sumBy(objs, 'amount');
                    return {
                        'type' : key,
                        'color' : objs[0].color,
                        'total' : _.sumBy(objs, 'amount')
                    }    

                })
                .value()
    //console.log(sum) 
    return sum;        
}

export function getLabels(transaction) {
    //2nd parameter type is to get response from above object
    let amountSum = getSum(transaction, 'type');
    let Total = _.sum(getSum(transaction));

    //calculate percentage
    let percent = _(amountSum)

    // .map to iterate array of object
                    .map(objs => _.assign(objs, { percent : (100 * objs.total)  / Total}))
                    .value()

return percent;                   
}


//"choice" parameter is when client wants to pass their own configuration to the chart
export function chartData(transaction, choice) {

    //"let bg" is to pass color as an array
    let bg = _.map(transaction, a => a.color)
    bg = _.uniq(bg)
    //console.log(bg)

    let dataValue = getSum(transaction)
    const newData = {
        data: {
          datasets: [{
            data: dataValue,
            backgroundColor: bg,
            hoverOffset: 4,
            borderRadius:30,
            spacing:11
          }] 
        },
        options: {
          cutout:115
        }
    }

    //if client passes "choice" parameter return "choice" or newData
    return choice ?? newData;  

}

export function getTotal(transaction){
  return _.sum(getSum(transaction));
}



