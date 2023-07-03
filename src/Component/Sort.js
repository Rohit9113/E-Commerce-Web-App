import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproducts } from "../actions";

export default function Sort() {
  const [flag, setFlag] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatchSort = useDispatch();
  const dispatchCancel = useDispatch();

  function handleSort() {
    // Sort the products array based on price in ascending order
    let sortedData = [...products].sort((a, b) => a.price - b.price);
    dispatchSort(addproducts(sortedData));
    setFlag(true);
  }

  function cancelSort() {
    // Retrieve the original unsorted products array from local storage
    let originalProducts = JSON.parse(window.localStorage.getItem("products"));
    dispatchCancel(addproducts(originalProducts));
    setFlag(false);
  }

  return (
    <div className="align-self-end">
      <div
        className="bg-white p-2 rounded-5  d-flex justify-content-around"
        style={style}
      >
        <span className="fw-bold" onClick={() => handleSort()}>
          Sort by Price
        </span>
        {flag && (
          <span>
            {/* Display a cancel button when sorting is active */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561189.png"
              alt="error"
              width={"20rem"}
              onClick={() => cancelSort()}
              style={{ cursor: "pointer" }}
            />
          </span>
        )}
      </div>
    </div>
  );
}

const style = {
  width: "9rem",
  cursor: "pointer",
};
