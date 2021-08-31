import { FruitDataProvider } from './store/FruitContext';
import Home from './components/Home';
function App() {
	return (
		<FruitDataProvider>
			<Home></Home>
		</FruitDataProvider>
	);
}

export default App;
