import "./Card.css";

function Card(props) {
	const classes = "card " + props.className;
	return <div className={classes}>{props.children}</div>; // THIS SHOWS THE CHILDREN INSIDE THE CUSTOM CLASS
}

export default Card;
