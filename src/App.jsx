import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
