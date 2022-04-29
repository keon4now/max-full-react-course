import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState(""); //method 1

	// or this method below

	//useState must be an object here
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: ""
	// }); // method 2 & 3

	const titleChangeHandler = (event) => {
		// it will also update but we really want to store in some variable thats detached from the life cycle of the component function

		//even if component func is executed again the state is stored and survives

		// onChange value will always read as a string thats why we store an empty string in useState
		// ...spread operator & key value pair

		setEnteredTitle(event.target.value);
		console.log(event.target.value);

		//pulls out key value pairs and adds to the end object
		// we can still over rite tne enteredTitle
		// other values are not thrown away

		// setUserInput({
		// 	...userInput,
		// 	enteredTitle: event.target.value
		// }); // method 2
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value); // works with separate arrays above

		//we want to pull out the value we need but not dump the other two values from useState above...when we update state react will not merge with old state but replace...so if only one value (enteredAmount: event.target.value) the other two key value pairs will be lost so we have to prevent that...we have to manually copy which we can use the spread operator to do

		//  nb - if we update and we're depending oon the prev state do not do it like this
		// setUserInput({
		// 	...userInput,
		// 	enteredAmount: event.target.value
		// }); // method 2
	};

	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value); //method one

		// depending on prev state?
		// do not use this method with above
		// setUserInput({
		// 	...userInput,
		// 	enteredDate: event.target.value
		// }); // method 2

		// call and pass an annoy arrow func - react will automatically execute and will receive the prevState as an argument

		// react schedules state updates do not do them instantly...prevSate is the safer way to operate on latest state update...when state update depends prev state
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredDate: event.target.value };
		// }); // method 3
	};

	//GATHER INFO FROM FORM INPUT AND CLEAR IT AFTER BUT WE NEED IT IN NEW EXPENSE AND APP JS
	const submitHandler = (event) => {
		event.preventDefault(); // prevents refresh

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};

		// we manually call this here which was the custom prop from new expenses...but we must pass props as a parameter above at the top ...result is a function...its now going to create a new element which we will then have to render to app js
		props.onSaveExpenseData(expenseData);

		setEnteredTitle(""); // now set it back to empty string from 2way binding...value would be the last one there
		setEnteredAmount("");
		setEnteredDate("");
	};
	return (
		//when a button with submit is placed inside a form the form element will emit and event to which we can listen so we want to add function to that

		// 2way binding - we listen and then change the input programmatically ...all we do is set a value attribute....very important when working with forms
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler} // custom prop looking for a func as a value...event props with functions as values
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={enteredAmount}
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={enteredDate}
						min="2019-01-01"
						max="2023-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
