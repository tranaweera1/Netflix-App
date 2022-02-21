
import { Topbar } from "./components/topbar/Topbar";
import "./app.css"
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./pages/home/Home";
import { UserList } from "./pages/userList/UserList";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";
import { ProductList } from "./pages/productList/ProductList";
import { Product } from "./pages/product/Product";
import { Login } from "./pages/login/Login"




function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
      <Route path="/login" element={<Login/>} />
      </Routes>
      <div className="container">
        <Sidebar />
        <Routes> 
          <Route path="/" element={<Home />} />
   
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} /> 
          <Route path="/movies" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
