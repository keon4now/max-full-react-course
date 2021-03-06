import React from 'react';

import Chart from '../Chart/Chart';

const ExpenseChart = props => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    // we loop through all expenses that we get via prop, get the month and update the data points
    //we add the value we get to each month in chartDataPoints 

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); 
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpenseChart;