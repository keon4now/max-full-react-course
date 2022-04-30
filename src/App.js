// import React from "react"; // WORKS WITH OLD WAY OF WRITING REACT
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// function App() {
const dummyData = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 694.12,
		date: new Date(2020, 7, 14)
	},
	{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28)
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 452.58,
		date: new Date(2021, 5, 12)
	}
];

const App = () => {
	const [expenses, setExpenses] = useState(dummyData);


	// setExpenses? first is the new one, spread is pulling existing ones
	// this below can work but not the best because if we depend of prev state there is a better way to do it below
	// const addExpenseHandler = (expense) => {
	// 	setExpenses([expenses, ...expenses]);
	// };

	//best way to update state when its based on previous state
	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	//WE ALWAYS NEED A ROOT ELEMENT
	return (
		//remember we can name the prop what ever...

		//expenses prop points to the array we will dynamically map in the expenses component
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses expenses={expenses} />
		</div>
	);

	// OLD WAY

	// create element takes 3 argument
	/* 
  1. Element that should be created....build in html? just put in a string
  3. object that configures the attribute is none just leave empty
  3. content between between opening and closing tags
  */

	// return React.createElement(
	// 	"div",
	// 	{},
	// 	React.createElement("h2", {}, "Let's get started!"),
	// 	React.createElement(Expenses, { expenses: expenses })
	// );
};

export default App;
