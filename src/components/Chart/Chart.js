import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

	// we want to convert the dataPoint object to an array
	// remember map will return a brand new array
	// the spread operator pulls out everything from the array
	const  dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const totalMaximum = Math.max(...dataPointValues);
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
