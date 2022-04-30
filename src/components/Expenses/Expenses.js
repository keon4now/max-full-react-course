import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

//smart / stateful component ...we can spread out and use as props

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = yearWeSelect => {
		setFilteredYear(yearWeSelect);
	};

	//selected below would be two way binding...we created a controlled component...expenseFilter is now a controlled component has it handles the value and its changes which is sent to expense filter


	//usually we do not know how many items we will have so instead we can dynamically  use map which creates a new array..transforms every item from the original array 
	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter 
					selected={filteredYear} 
					onChangeFilter={filterChangeHandler}
					/>
				{props.expenses.map((expenses => 
					<ExpenseItem  
						title={expenses.title}
						amount={expenses.amount}
						date={expenses.date}
						/>
						))}
		
				


				{/* <ExpenseItem
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
				></ExpenseItem> */}
			</Card>
		</div>
	);
};

// gray out is simplified above it

export default Expenses;