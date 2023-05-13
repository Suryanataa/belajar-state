import Button from "../Button/Button";
import { useState } from "react";

const products = [
	{
		id: 1,
		name: "Minuman Berkelas",
		price: 22000,
	},
	{
		id: 2,
		name: "Minuman Berkah",
		price: 35000,
	},
	{
		id: 3,
		name: "Makanan Mas Imut",
		price: 50000,
	},
];

const Products = () => {
	const [cart, setCart] = useState([]);

	const CartPlus = (id) => {
		if (cart.find((item) => item.id === id)) {
			setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
		} else {
			setCart([...cart, { id, qty: 1 }]);
		}
	};
	const CartMinus = (id) => {
		if (cart.find((item) => item.id === id)) {
			setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item)));
		}
	};
	return (
		<>
			<div className="py-4 mx-6 my-6">
				<h1 className="mb-6 text-2xl font-bold">Produk</h1>
				{products.map((product) => (
					<div className="border-b border-slate-200 mb-9" key={product.id}>
						<div className="flex ">
							<div className="flex flex-col justify-between w-5/6">
								<h2 className="text-xl font-bold">{product.name}</h2>
								<p className="text-base ">{product.price.toLocaleString("ID", { style: "currency", currency: "IDR" })}</p>
							</div>
							<div className="w-1/6 ">
								<img src="/assets/logo.jpg" alt="logo" className="ml-auto rounded-lg" width={100} />
							</div>
						</div>
						<div className="flex items-center justify-between my-5">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart " viewBox="0 0 16 16">
								<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
							</svg>
							{cart.find((item) => item.id === product.id)?.qty === undefined || cart.find((item) => item.id === product.id)?.qty === 0 ? (
								<Button onClick={() => CartPlus(product.id)}>Tambah</Button>
							) : (
								<div className="flex ml-auto">
									<Button btnStyle="" onClick={() => CartMinus(product.id)}>
										-
									</Button>
									<p className="mx-2">{cart.find((item) => item.id === product.id)?.qty}</p>
									<Button btnStyle="" onClick={() => CartPlus(product.id)}>
										+
									</Button>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Products;
