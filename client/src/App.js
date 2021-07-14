
import './App.css';
import Products from './component/allProducts.js';
import Home from './component/home';
import Add from './component/Add.js'
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import ManageProducts from './component/manageProduct.js';
import View from'./component/view.js';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/home"className="nav-link active" aria-current="page">Home</Link>
        <Link to="/all Products"className="nav-link">All Products</Link>
        <Link to ="/add"className="nav-link">Add Product</Link>
        <Link to="/manageStudent"className="nav-link">Manage_Products</Link>
        
        
      </div>
    </div>
  </div>
</nav>

  <Route path="/home" exact><Home/></Route>
  <Route path="/" exact><Home/></Route>
  <Route path="/all products" exact><Products/></Route>
  <Route path="/add" exact><Add/></Route>
  <Route path="/manageStudent" exact><ManageProducts/></Route>
  <Route path="/view" exact><View/></Route>
  
      </Router>
      
    </div>
  );
}

export default App;
