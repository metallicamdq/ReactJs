import './body.css';
import ItemListContainer from './components/Cart/ItemListContainer';
import NavBar from './components/navbar'

function App() {
  return (
    <div className="body">
     <NavBar/>
     <ItemListContainer titulo="Nike Air Max"/>
     </div>
  );
}

export default App;