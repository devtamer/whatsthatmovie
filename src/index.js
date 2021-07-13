import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=60";
    // hold books object
    const [books, setBooks] = useState(null)
    const getInfo = async () => {
        const response = await axios.get(apiURL)
        setBooks(response.data)
    }

    return (
        <div className="App">
            <h1>Game of Thrones Books</h1>
            <h2>Fetch a list from an API and display it</h2>

            {/* Fetch data from API */}
            <div>
                <button className="fetch-button" onClick={getInfo}>Fetch Data</button>
                <br />
            </div>

            {/* Display data from API */}


            {/* Use JSX below for each book */}
            <div className="books">
                {books && books.map((book, index) => {
                    const title = book.name;
                    const cleanDate = new Date(book.released).toDateString();
                    const authors = book.authors.join(", ")

                    return (
                        <div className="book">
                            <h3>Book {index + 1}</h3>
                            <h2>{title}</h2>

                            <div className="details">
                                <p>👨: {authors}</p>
                                <p>📖: {book.numberOfPages}</p>
                                <p>🏘️: {book.country}</p>
                                <p>⏰: {cleanDate}</p>
                            </div>
                        </div>
                    )


                })}

            </div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
