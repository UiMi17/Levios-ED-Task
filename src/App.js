import { Route, Routes } from "react-router-dom";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <Routes>
      <Route index element={<ProductsList />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default App;
