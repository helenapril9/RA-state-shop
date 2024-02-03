import './App.css';
import Store from './layouts/Store';
import products from './layouts/data/products';

function App() {
  return (
    <div>
      <Store products={products} />
    </div>
  );
}

export default App;



