import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<div className="flex justify-between w-full h-auto px-6 py-3 mt-6 overflow-x-auto bg-gray-100">
				<div className="border-r w-6/6 border-slate-500 pr-6 mr-[20px]">
					<span className="text-base font-bold">Judul</span>
					<p className="text-xs w-max">Lorem ipsum</p>
				</div>
				<div className="border-r w-6/6 border-slate-500 pr-6 mr-[20px]">
					<span className="text-base font-bold">Judul</span>
					<p className="text-xs w-max">Lorem ipsum</p>
				</div>
				<div className="border-r w-6/6 border-slate-500 pr-6 mr-[20px]">
					<span className="text-base font-bold">Judul</span>
					<p className="text-xs w-max">Lorem ipsum</p>
				</div>
				<div className="border-r w-6/6 border-slate-500 pr-6 mr-[20px]">
					<span className="text-base font-bold">Judul</span>
					<p className="text-xs w-max">Lorem ipsum</p>
				</div>
				<div className="w-6/6 ">
					<span className="text-base font-bold">Judul</span>
					<p className="text-xs w-max">Lorem ipsum</p>
				</div>
			</div>
			<div className="p-4 mx-6 mt-6 border rounded-xl">
				<div className="flex items-center pb-4 border-b">
					<img src="/assets/logo.jpg" alt="logo" width={45} className="mr-3 rounded-full" />
					<div className="flex flex-col">
						<h3 className="font-bold">Pesan antar</h3>
						<p className="text-xs">Lorem ipsum</p>
					</div>
					<button className="px-3 pb-1 ml-auto font-bold text-green-800 border border-green-600 rounded-full">Ganti</button>
				</div>
				<div className="flex items-center pt-4">
					<img src="/assets/logo.jpg" alt="logo" width={45} className="mr-3 rounded-full" />
					<div className="flex flex-col">
						<h3 className="font-bold">Coba mode hemat</h3>
						<p className="text-xs">Lorem ipsum</p>
					</div>
					<button className="px-3 pb-1 ml-auto font-bold text-green-800 bg-green-100 border rounded-full">Info</button>
				</div>
			</div>
			<div className="p-4 mx-6 mt-6 border rounded-xl">
				<div className="flex items-center pb-4 border-b">
					<img src="/assets/logo.jpg" alt="logo" width={45} className="mr-3 rounded-full" />
					<div className="flex flex-col">
						<h3 className="font-bold">Ada 200 promo</h3>
						<p className="text-xs">Lorem ipsum</p>
					</div>
					<button className="px-2 py-2 ml-auto font-bold text-green-800 bg-green-100 border rounded-full">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
						</svg>
					</button>
				</div>
				<div className="flex items-center pt-4 ">
					<div className="flex flex-col ">
						<p className="text-sm">Lorem ipsum</p>
						<p className="text-sm">Lorem ipsum</p>
					</div>
				</div>
			</div>
			<Products />
		</>
	);
}

export default App;
