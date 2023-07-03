import React from "react";
import Nav from "./Component/Nav";
import ProductDetail from "./Component/ProductDetail";
import AddProduct from "./Component/AddProduct";
import CartItems from "./Component/CartItems";
import ProductItemList from "./Component/ProductItemList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addproducts } from "./actions/index";
import customFetch from "./apiCall";
import { useEffect } from "react";

function App() {
  // Select the product detail item from the Redux store
  const productDetailItem = useSelector((state) => state.itemToDisplay);

  // URL for fetching data
  const url = "https://my-json-server.typicode.com/jaiswalaryan/data/db";

  // Dispatch function from Redux
  const dispatch = useDispatch();

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch(url, {
          method: "GET",
        });

        // Modify the data and add "edit" property
        const modifiedData = response.products.map((item) => {
          item.edit = true;
          return item;
        });

        // Store modified data in local storage
        window.localStorage.setItem("products", JSON.stringify(modifiedData));

        // Get products from local storage
        const products = JSON.parse(window.localStorage.getItem("products"));

        // Dispatch the action to add products to Redux store
        dispatch(addproducts(products));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* Navigation component */}
        <Nav />

        <Routes>
          {/* Route for displaying product item list */}
          <Route path="/" element={<ProductItemList />} />

          {/* Route for adding a new product */}
          <Route path="/addproducts" element={<AddProduct />} />

          {/* Route for displaying product details */}
          <Route
            path={`/productdetails/${productDetailItem.id}`}
            element={<ProductDetail item={productDetailItem} />}
          />

          {/* Route for displaying cart items */}
          <Route path="/cart" element={<CartItems />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
