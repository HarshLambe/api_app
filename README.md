# MERN Stack Transactions Dashboard

This project is a **MERN Stack** application that fetches transaction data from a third-party API and displays the data using a table and charts on a single page. It includes search, pagination, and monthly filtering functionalities.

## Features

- **Transactions Table**: Displays product transactions for a selected month with search and pagination support.
- **Statistics API**: Provides statistics on total sale amount, sold items, and unsold items for the selected month.
- **Bar Chart API**: Shows the number of items in specific price ranges for the selected month.
- **Pie Chart API**: Displays the unique categories and the number of items in each category for the selected month.
- **Combined API**: Fetches data from all three APIs (statistics, bar chart, pie chart) and returns a combined response.

## Technologies

### Backend

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose ORM
- **Axios** for HTTP requests
- **DataTables** for table rendering (client-side)
- **Chart.js** for charts

### Frontend
- **React.js**
- **Axios for API requests**
- **DataTables (using jQuery) for handling table display and pagination**
- **Chart.js for visualizing bar and pie charts**
## Installation

1. Backend Dependencies:
   ```
   cd backend
   npm i or npm install 
   ```
   
2. Frontend dependencies:
   ```
   cd frontend
   cd vite-project
   npm i or npm install 
   ```

## Usage

1. Backend Deploy:
   ```
   cd backend
   node server.js
   ```

2. Frontend Deploy:
   ```
   cd frontend
   cd vite-project
   npm run dev

   ```
## Set up MongoDB connection in .env file:
   ```
     cd backend
     create .env
     MONGO_URI=mongodb://localhost:27017/mern-challenge
     PORT=5000
     API_URL=https://s3.amazonaws.com/roxiler.com/product_transaction.json
  ```

## Screenshots
*This is the main interface of our project *
![Screenshot 1](email/images/main.png) 

*Classified mail as Spam *
![Screenshot 2](email/images/spam.png)

*Classified mail as Real *
![Screenshot 3](email/images/notspam.png)


## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

#
### Contact

For questions or support, please contact [lambeharsh21@gmail.com](mailto:lambeharsh21@gmail.com).

