import React, { useState } from "react";

function App() {

    // TODO 1:
    // Create state variables for:
    // name, email, feedback and error message


    // TODO 2:
    // Create a function to handle form submission


    // TODO 3:
    // Validate the following:
    // 1. Name should not be empty
    // 2. Email should not be empty
    // 3. Feedback should not be empty
    // 4. Email should contain @


    // TODO 4:
    // Display the feedback form


    return (
        <div className="container">

            <h1>Student Feedback Form</h1>

            <form>

                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                    />
                </div>

                <br />

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>

                <br />

                <div>
                    <label>Feedback:</label>
                    <br />
                    <textarea
                        id="feedback"
                        rows="5"
                        placeholder="Enter your feedback"
                    ></textarea>
                </div>

                <br />

                {/* Display validation error here */}

                <button type="submit">
                    Submit Feedback
                </button>

            </form>

        </div>
    );
}

export default App;
