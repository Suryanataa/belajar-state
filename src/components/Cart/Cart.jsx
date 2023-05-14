/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Cart = (props) => {
	const { item, price, sumItem } = props;
	return (
		<div className="fixed flex items-center justify-between w-10/12 py-1 text-white -translate-x-1/2 bg-green-700 rounded-full bottom-8 h-14 px-7 left-1/2">
			<div className="w-3/5">
				<div className="flex flex-col">
					<h4 className="font-bold">{sumItem} item</h4>
					<p className="w-full overflow-hidden text-xs overflow-ellipsis whitespace-nowrap">{item}</p>
				</div>
			</div>
			<div className="w-2/5">
				<div className="flex items-center justify-between">
					<h3 className="ml-auto font-semibold">{price}</h3>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ml-2 bi bi-bag-heart-fill" viewBox="0 0 16 16">
						<path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
					</svg>
				</div>
			</div>
		</div>
	);
};
export default Cart;
