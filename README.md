# Color Scheme Generator

Color Scheme Generator is a web application that leverages HTML, CSS, and JavaScript to provide users with a straightforward interface to generate color schemes based on a chosen color and harmony theme. The application utilizes the ColorAPI to fetch color schemes dynamically.


## Technologies Used
HTML5: Provides the structure of the web page.
CSS3: Defines the styling, making use of the Normalize.css library.
JavaScript: Manages user interactions, makes API requests, and dynamically updates the UI.
ColorAPI: External API for fetching color schemes based on user input.

## Technical Overview

The JavaScript code interacts with the DOM to handle user input and fetch color schemes from the ColorAPI. It listens for the "Get Color Scheme" button click event, retrieves the selected color and theme, and makes an asynchronous fetch request to the ColorAPI. The resulting color palette is then dynamically displayed on the webpage.

### ColorAPI Integration

The ColorAPI (https://www.thecolorapi.com/) is utilized to obtain color schemes based on the selected color and theme. The API request is constructed with the chosen color (hex code) and theme, fetching a set of colors in JSON format.

## Contributing
Contributions to the project are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/color-scheme-generator.git

