import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home"
import Shop from "./Shop"
import Cart from "./Cart"
import NotFoundPage from "./NotFoundPage"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;