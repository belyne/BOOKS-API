# Books API

This is a simple RESTful API to manage a list of books using Express and Swagger for documentation.

## Endpoints

- GET `/api/books`: Retrieve a list of books.
- GET `/api/books/:id`: Retrieve a single book by ID.
- POST `/api/books`: Add a new book.
- PUT `/api/books/:id`: Update an existing book by ID.
- DELETE `/api/books/:id`: Delete a book by ID.

## Requirements

Use Swagger to document the API. The documentation should include:
Endpoints with descriptions.
Request parameters and bodies where applicable.
Response structures and examples.
Implementation Details:
Books should have the following properties: id, title, author, publishedDate, and summary.
Use an in-memory array to store the list of books (no database required).

## Book Properties:

id: Unique identifier for the book (integer).
title: Title of the book (string).
author: Author of the book (string).
publishedDate: Publication date of the book (string).

## summary: 
Summary of the book (string).
Project Structure

book-api/
├── node_modules/
├── routes/
│   └── books.js
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── swagger.js

index.js: Main entry point of the application. Sets up the server and integrates routes and Swagger documentation.
routes/books.js: Contains the API routes for managing books and the Swagger documentation for these endpoints.
swagger.js: Configures Swagger for API documentation.

## To run the server:

nodemon index.js

## Access the API:

API Endpoints: Test the API endpoints using tools like Postman or directly via HTTP requests. For example, retrieve the list of books by sending a GET request to http://localhost:3000/api/books.
Swagger Documentation: Open your browser and navigate to http://localhost:3000/api-docs to access the interactive Swagger UI, which allows you to explore and test the API endpoints.