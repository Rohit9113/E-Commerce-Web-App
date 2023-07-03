# Ecommerce React App

This project is the frontend implementation of an ecommerce website. It utilizes React.js along with Redux for state management. The application interacts with a dummy ecommerce API service to fetch and manipulate data.

## Functionality

- **Navbar**: The navbar displays the cart items count and relevant navigation links.
- **All Products Page**: This page lists all the products retrieved from the API. Each product can be edited or deleted. There is also a sort button to sort the products by price.
- **Create Page**: Users can add a new product to the database, and appropriate notifications are shown upon successful completion.
- **Product Detail Page**: This page displays the details of a specific product, and users have the option to add the product to their cart.
- **Cart Page**: The cart page shows all the items in the cart, and appropriate error handling and notifications are implemented.

## Additional Features

- The Redux data is made persistent, so the cart items and other relevant data remain the same even after refreshing the page.
- The project utilizes React Router for navigation between different pages.

## Live Demo

You can check out the live demo of the Ecommerce React App [here](https://api-e-commerce-d077.onrender.com/).

## Repository

The source code for the project is available on [GitHub](https://github.com/Rohit9113/E-Commerce-Web-App).

## Installation and Setup

1. Clone the repository to your local machine.
2. Install the project dependencies by running the following command:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your web browser and visit `http://localhost:3000` to access the application.

## Technologies Used

- React.js
- Redux
- React Router
- HTML
- CSS with Bootstrap

## Contributing

Contributions to this project are welcome! If you have any suggestions, bug fixes, or enhancements, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
