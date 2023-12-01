import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Header } from './components/Header/Header';
import { Product } from './components/Product/Product';
import { Signup } from './components/Signup/Signup';
import { Footer } from './components/Footer/Footer';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Header
						allProducts={allProducts}
						setAllProducts={setAllProducts}
						total={total}
						setTotal={setTotal}
						countProducts={countProducts}
						setCountProducts={setCountProducts}
					/>}>
						<Route index element={<Product
							allProducts={allProducts}
							setAllProducts={setAllProducts}
							total={total}
							setTotal={setTotal}
							countProducts={countProducts}
							setCountProducts={setCountProducts} />} />
						<Route path='Signup' element={<Signup />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
