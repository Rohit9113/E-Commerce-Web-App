// Constants
export const Add_products = "Add_products"; // Action type for adding products
export const Add_cart = "Add_cart"; // Action type for adding items to the cart
export const Product_view = "product_view"; // Action type for viewing a product
export const Cart_items = "Cart_items"; // Action type for fetching cart items
export const update_cart = "update_cart"; // Action type for updating cart items
export const delete_cart = "delete_cart"; // Action type for deleting cart items

// Action creators
export function addproducts(products) {
  return {
    type: Add_products,
    products, // The payload containing the products to be added
  };
}

export function addCart(cart) {
  return {
    type: Add_cart,
    cart, // The payload containing the item to be added to the cart
  };
}

export function ProductToview(item) {
  return {
    type: Product_view,
    view: item, // The payload containing the item to be viewed
  };
}

export function CartItems() {
  return {
    type: Cart_items,
  };
}

export function updateCart(item) {
  return {
    type: update_cart,
    updatedItem: item, // The payload containing the updated item
  };
}

export function DeleteCart(item) {
  return {
    type: delete_cart,
    item, // The payload containing the item to be deleted from the cart
  };
}
