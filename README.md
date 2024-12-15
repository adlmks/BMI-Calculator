# BMI Calculator

This is a simple BMI calculator web application built with Node.js, Express.js, and basic HTML and CSS. It allows users to input their weight, height, age, and gender, then calculates their BMI and provides health tips based on the result.

## Features
- BMI calculation based on the formula: BMI = weight (kg) / (height (m) * height (m))
- Categorizes BMI into Underweight, Normal weight, Overweight, and Obesity
- Validates inputs to ensure proper data is entered
- Provides health tips based on the BMI result
- Responsive and user-friendly design

## How to Run
1. Clone this repository.
2. Install dependencies with `npm install`.
3. Run the application with `npm start`.
4. Open your browser and go to `http://localhost:3000`.

## Files Included:
- `views/index.html`: The main page with a form for input.
- `views/result.html`: The result page displaying the calculated BMI and health tips.
- `public/style.css`: The styles for the application.
- `server.js`: The main server-side logic for routing and BMI calculation.
