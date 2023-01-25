import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./home"
import Products from "./products"
import ProductDetail from "./productDetail"
import Login from "./login"
import configureStore from "./redux/store"
import { Provider } from "react-redux"
const App = ()=> {
  const {store} = configureStore()
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="products" element={<Products/>} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="auth/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
export default App