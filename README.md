# Protein Per Dollar

## Project Description

Protein Per Dollar is a frontend React application that helps users compare foods based on protein value relative to cost. Users enter a food name and a price per unit (lb, oz, or g). The app fetches protein data from the USDA FoodData Central API, normalizes prices to $/100g, calculates protein per dollar, and ranks foods from highest to lowest for quick comparison.

## Tech Stack

- React + Vite
- Javascript
- Tailwind CSS
- USDA FoodData Central API
- Git / Github

## Features

- Add food items using a search term + price + unit (lb / oz / g)
- Fetch nutrition data (protein) from USDA FoodData Central
- Normalize price to $/100g for consistent comparison
- Calculate protein per dollar and automatically rank results
- Remove items from the list
- Responsive layout with mobile navigation
- About page describing the app and author

## How to run locally

1. Clone the repository
  - `git clone [REPO_URL]`
2. Install dependencies
  - `npm install / npm ci`
3. Create an environment file
  - Create a `.env` file in the project root (see Environment Variables below)
4. Start the development server:
  - Run `npm run dev`
5. Open the app in your browser:
  - Open `http://localhost:4500` or change to whatever port inside `vite.config.js`

## Environment Variables

This project requires a USDA FoodData Central API key.

Create a `.env` file in the project root and add:

- `VITE_API_URL=https://api.nal.usda.gov/fdc/v1/foods`
and
- `VITE_API_KEY=your_api_key`

## Author

**Abraham Efraim**
- Github: [reondaze-a](https://github.com/reondaze-a)
- LinkedIn: [Abraham Efraim](https://linkedin.com/in/abraham-efraim/)

## Project Pitch

Check out [this video](https://drive.google.com/file/d/1k9R7GaBp5eZVyCE6nIfuozrWpe0OlO6z/view?usp=drive_link), where I describe my project and some challenges I faced while building it.