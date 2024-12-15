const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse the form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Serve the homepage with the BMI form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Handle the form submission to calculate BMI
app.post("/calculate", (req, res) => {
  const { weight, height, age, gender } = req.body;

  // Input validation
  if (!weight || !height || weight <= 0 || height <= 0) {
    return res.send("Please enter valid positive numbers for weight and height.");
  }

  // BMI calculation
  const bmi = weight / (height * height);
  let category = "";
  let healthTips = "";

  // BMI categorization
  if (bmi < 18.5) {
    category = "Underweight";
    healthTips = "Consider a balanced diet with more calories.";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    healthTips = "Maintain a balanced diet and regular exercise.";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    healthTips = "Consider adopting a healthy diet and exercising regularly.";
  } else {
    category = "Obesity";
    healthTips = "Consult a healthcare provider for a proper weight management plan.";
  }

  // Send the result to a new page
  res.render("result", {
    bmi: bmi.toFixed(2),
    category: category,
    healthTips: healthTips,
    age: age,
    gender: gender,
  });
});

// Set up view engine (EJS for rendering HTML files with dynamic data)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
