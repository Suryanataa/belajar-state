/* eslint-disable react/prop-types */
const Button = (props) => {
	const { btnStyle, children, onClick = () => {} } = props;
	return (
		<button onClick={onClick} className={`border border-green-600 rounded-full px-3 pb-1 ml-auto text-green-800 font-bold ${btnStyle}`}>
			{children}
		</button>
	);
};

export default Button;
