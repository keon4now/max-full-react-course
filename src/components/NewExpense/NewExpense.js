import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//as a first step we want the data from expense form...it needs this info then the app.js needs info from new expense so we are going up ....props can only go from parent to child

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	//name of parameter does not matter ....
	// expense data is from expense form ...pull out key value pairs and add to this object then add a new id key
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		props.onAddExpense(expenseData); // from app.js will just log
		setIsEditing(false);


		const startEditingHandler = () => {
			setIsEditing(true);

		const stopEditingHandler = () => {
			setIsEditing(false);
		}
		};
	};
	return (
		//prop: can name whatever as below...
		// not executed we just point to it...
		<div className="new-expense">
 			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
		</div>
	);
};
export default NewExpense;
