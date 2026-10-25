import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Please enter your name";
    }

    if (email.trim() === "") {
      newErrors.email = "Please enter your email";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (feedback.trim() === "") {
      newErrors.feedback = "Please enter your feedback";
    }

    setErrors(newErrors);
    setSuccess(Object.keys(newErrors).length === 0);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Arial, sans-serif", padding: "30px" }}>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="name">Student Name</label>
          <br />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "6px", boxSizing: "border-box" }}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "6px", boxSizing: "border-box" }}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="feedback">Feedback</label>
          <br />
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="5"
            style={{ width: "100%", padding: "10px", marginTop: "6px", boxSizing: "border-box" }}
          />
          {errors.feedback && <p>{errors.feedback}</p>}
        </div>

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      {success && <h2>Feedback submitted successfully!</h2>}
    </div>
  );
}

export default App;
