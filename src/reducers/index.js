import {
  Add_products,
  Add_cart,
  Product_view,
  Cart_items,
  update_cart,
  delete_cart
} from "../actions";

let initialState = {
  products: [],
  cart: [],
  itemToDisplay: "",
  totalCart: 0,
};

export default function products(state = initialState, actions) {
  switch (actions.type) {
    case Add_products:
      return {
        ...state,
        products: actions.products,
      };
    // Add_products case: Updates the state with the new products list

    case Add_cart:
      let flag = state.cart.indexOf(actions.cart);
      if (flag !== -1) {
        actions.cart.qty += 1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cart: [actions.cart, ...state.cart],
        };
      }
    /* Add_cart case:
      - Checks if the cart already contains the item.
      - If it exists, increment the quantity by 1.
      - If it doesn't exist, add the item to the cart array. */

    case Product_view:
      return {
        ...state,
        itemToDisplay: actions.view,
      };
    // Product_view case: Updates the itemToDisplay value in the state

    case Cart_items:
      let { cart } = state;
      let total = cart.reduce((total, item) => {
        return (total += item.qty);
      }, 0);
      return {
        ...state,
        totalCart: total,
      };
    // Cart_items case: Calculates and updates the totalCart value in the state

    case update_cart:
      let index = state.cart.indexOf(actions.updatedItem);
      let updatedCart = null;
      if (index !== -1) {
        state.cart[index] = actions.updatedItem;
        updatedCart = state.cart;
      }
      return {
        ...state,
        cart: [...updatedCart],
      };
    /* update_cart case:
      - Finds the index of the updatedItem in the cart array.
      - If the item exists, update it with the new values.
      - Updates the cart array in the state with the modified item. */

    case delete_cart:
      let position = state.cart.indexOf(actions.item);
      state.cart.splice(position, 1);
      return {
        ...state,
      };
    /* delete_cart case:
      - Finds the index of the item to delete in the cart array.
      - Removes the item from the cart array.
      - Updates the state with the modified cart array. */

    default:
      return state;
      // Default case: Returns the current state if the action type is not recognized.
  }
}
