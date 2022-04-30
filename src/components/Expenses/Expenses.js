import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = yearWeSelect => {
		setFilteredYear(yearWeSelect);
	};

	//selected below would be two way binding
	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
				<ExpenseItem
					title={props.expenses[0].title} // THESE ARE FROM APP.JS (expenses)
					amount={props.expenses[0].amount}
					date={props.expenses[0].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.expenses[1].title}
					amount={props.expenses[1].amount}
					date={props.expenses[1].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.expenses[2].title}
					amount={props.expenses[2].amount}
					date={props.expenses[2].date}
				></ExpenseItem>
				<ExpenseItem
					title={props.expenses[3].title}
					amount={props.expenses[3].amount}
					date={props.expenses[3].date}
				></ExpenseItem>
			</Card>
		</div>
	);
};



export default Expenses;