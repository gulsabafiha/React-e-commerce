import { Container } from "react-bootstrap";
import HomeScreen from "./components/Pages/HomeScreen/HomeScreen";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductScreen from "./components/Pages/ProductScreen/ProductScreen";
import CartScreen from "./components/Pages/CartScreen/CartScreen";
import LoginScreen from "./components/Pages/LoginScreen/LoginScreen";
import RegisterScreen from "./components/Pages/RegisterScreen/RegisterScreen";
import ProfileScreen from "./components/Pages/ProfileScreen/ProfileScreen";
import ShippingScreen from "./components/Pages/ShippingScreen/ShippingScreen";
import Header from "./components/SharedComp/Header/Header";
import Footer from "./components/SharedComp/Footer/Footer";
import PaymentScreen from "./components/Pages/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./components/Pages/PlaceOrderScreen/PlaceOrderScreen";
import OrderDetailsScreen from "./components/Pages/OrderDetailsScreen/OrderDetailsScreen";
import UserListScreen from "./components/Pages/UserListScreen/UserListScreen";
import UserEditScreen from "./components/Pages/UserEditScreen/UserEditScreen";
import ProductListScreen from "./components/Pages/ProductListScreen/ProductListScreen";
import ProductEditScreen from "./components/Pages/ProductEditScreen/ProductEditScreen";
import OrderListScreen from "./components/Pages/OrderListScreen/OrderListScreen";

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route
          path="admin/product/:productId/edit"
          element={<ProductEditScreen />}
        />

        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/register" element={<RegisterScreen />} />

        <Route path="/admin/productList" element={<ProductListScreen />} />
        <Route path="/admin/userList" element={<UserListScreen />} />
        <Route path="/admin/orderList" element={<OrderListScreen />} />
        <Route path="/admin/user/:userId/edit" element={<UserEditScreen />} />

        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeOrder" element={<PlaceOrderScreen />} />
        <Route path="/order/:orderId" element={<OrderDetailsScreen />} />
      </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
