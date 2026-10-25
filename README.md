# React Practical – Feedback Form with Validation

## Practical Number 13

## Title

Create a Feedback Form with Validation Using React Hooks

---

## Aim

To create a feedback form in React and validate the user input using React Hooks.

---

## Problem Statement

Create a React application that displays a Student Feedback Form.

The form should contain:

1. Student Name
2. Email
3. Feedback
4. Submit button

The application must validate the entered information before submitting the form.

---

## React Concepts to be Used

Students must use the following:

- useState Hook
- Event Handling
- onChange
- onSubmit
- Form Handling
- Conditional Rendering
- Input Validation

---

## Validation Requirements

The application must perform the following validations.

### 1. Name Validation

Name must not be empty.

Expected message:

`Please enter your name`

### 2. Email Validation

Email must not be empty.

Expected message:

`Please enter your email`

### 3. Email Format Validation

Email must contain `@`.

Expected message:

`Please enter a valid email`

### 4. Feedback Validation

Feedback must not be empty.

Expected message:

`Please enter your feedback`

---

## Successful Submission

When all fields contain valid data, display:

`Feedback submitted successfully!`

---

# Folder Structure

```text
RJS-P12/
│
├── .github/
│   └── workflows/
│       └── autograding.yml
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   └── index.js
│
├── tests/
│   └── test.js
│
├── .babelrc
├── package.json
├── webpack.config.js
└── README.md
