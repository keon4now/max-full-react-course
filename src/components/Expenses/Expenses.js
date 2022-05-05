import React, { useState } from "react";


import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

//smart / stateful component ...we can spread out and use as props

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	//selected below would be two way binding...we created a controlled component...expenseFilter is now a controlled component has it handles the value and its changes which is sent to expense filter

	//usually we do not know how many items we will have so instead we can dynamically  use map which creates a new array..transforms every item from the original array

	//always add a key when mapping items

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseChart  expenses={filteredExpenses} />
				<ExpenseList expenses={filteredExpenses} />
			</Card>
		</div>
	);
};

// gray out is simplified above it

export default Expenses;