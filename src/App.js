// import React from "react"; // WORKS WITH OLD WAY OF WRITING REACT
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// function App() {
const App = () => {
	const expenses = [
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

	const addExpenseHandler = (expense) => {
		console.log("In aaPPP.JS");
		console.log(expenses); // will just console log this
	};

	//WE ALWAYS NEED A ROOT ELEMENT
	return (
		//remember we can name the prop what ever
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
};;

export default App;
