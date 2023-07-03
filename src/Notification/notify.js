import { toast } from "react-toastify";

// Function to display a toast message
export const showToastMessage = (message, type) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT, // Set the position of the toast message
  });
};
